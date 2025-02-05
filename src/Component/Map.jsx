import { useEffect, useRef, useState } from "react";
import useGeolocation from "../hooks/useGeolocation.js";

function Map() {
  const mapRef = useRef(null);
  const { currentMyLocation } = useGeolocation();
  const [address, setAddress] = useState([]);

  // API에서 주소 목록 가져오기
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(process.env.REACT_APP_ADDRESS_API);
      const data = await result.json();
      setAddress(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (
      window.naver &&
      window.naver.maps &&
      currentMyLocation.lat !== 0 &&
      currentMyLocation.lng !== 0
    ) {
      const { naver } = window;

      const mapOptions = {
        center: new naver.maps.LatLng(
          currentMyLocation.lat,
          currentMyLocation.lng
        ),
        zoom: 14,
        zoomControl: true,
      };

      mapRef.current = new naver.maps.Map("map", mapOptions);

      const colorMap = {
        식당: "orange",
        카페: "yellow",
        술집: "green",
        놀거리: "blue",
        명소: "purple",
      };

      address.forEach((addressItem) => {
        const markerColor = colorMap[addressItem.placeType] || "red"; // 기본값 빨강
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(addressItem.lat, addressItem.lng),
          map: mapRef.current,
          icon: {
            url: `https://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
            size: new naver.maps.Size(30, 36),
            scaledSize: new naver.maps.Size(30, 36),
            anchor: new naver.maps.Point(12, 36),
          },
        });

        const infoWindow = new naver.maps.InfoWindow({
          content: `
            <div style="padding:10px 10px 0px 10px; font-weight:bold;">
              ${addressItem.placeName}
            </div>
            <div style="padding:0px 10px 10px 10px; text-align:center;">
              ${addressItem.placeType}
            </div>
          `,
        });

        naver.maps.Event.addListener(marker, "click", () => {
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(mapRef.current, marker);
          }
        });
      });
    }
  }, [currentMyLocation, address]);

  return (
    <div
      id="map"
      style={{
        width: "93%",
        height: "300px",
        zIndex: "0",
        border: "1.5px #636038 solid",
      }}
    />
  );
}

export default Map;

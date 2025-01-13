import { use, useEffect, useRef, useState } from 'react';
import useGeolocation from '../hooks/useGeolocation.js';

function Map() {
  const mapRef = useRef(null);
  const { currentMyLocation } = useGeolocation();
  const [address, setAddress] = useState([]);

    // API에서 주소 목록 가져오기
    useEffect(() => {
      async function fetchData() {
        const result = await fetch(process.env.REACT_APP_ADDRESS_API); // API URL
        const data = await result.json();
        setAddress(data);
        // console.log('Fetched addresses:', data); // 데이터 확인
      }
  
      fetchData();
    }, []);

  useEffect(() => {
    if (window.naver && window.naver.maps && currentMyLocation.lat !== 0 && currentMyLocation.lng !== 0) {
      const { naver } = window;

      const mapOptions = {
        center: new naver.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        zoom: 14,
        zoomControl: true,
      };

      mapRef.current = new naver.maps.Map('map', mapOptions);

      // Clear any existing markers before adding new ones
      const markers = [];

      address.forEach((addressItem, index) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(addressItem.lat, addressItem.lng),
          map: mapRef.current,
        });

        const infoWindow = new naver.maps.InfoWindow({
          content: `<div style="padding:10px;">${addressItem.placeName}</div>`,
        });

        markers.push(marker);

        naver.maps.Event.addListener(marker, 'click', () => {
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(mapRef.current, marker);
          }
        });
      });
    }
  }, [currentMyLocation, address]);

  return <div id="map" style={{ width: '93%', height: '400px', zIndex:'0' }} />;
}

export default Map;

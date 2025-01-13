import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [currentMyLocation, setCurrentMyLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [locationLoading, setLocationLoading] = useState(false);

  const getCurPosition = () => {
    console.log('getCurPosition called');
    setLocationLoading(true); // 로딩 시작

    const success = (location) => {
      console.log('Success: Location fetched');
      setCurrentMyLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      setLocationLoading(false); // 로딩 종료
    };

    const error = () => {
      console.log('Error: Failed to fetch location');
      setCurrentMyLocation({ lat: 35.17703333, lng: 128.1100000 }); // 기본 좌표
      setLocationLoading(false); // 로딩 종료
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.error('Geolocation is not supported by this browser.');
      error();
    }
  };

  useEffect(() => {
    getCurPosition();
  }, []);

  useEffect(() => {
    console.log('Location Loading State:', locationLoading); // 상태 변화 로그
  }, [locationLoading]);
  useEffect(() => {
    console.log('Updated Location:', currentMyLocation);
  }, [currentMyLocation]);
  

  return { currentMyLocation, locationLoading, getCurPosition };
};

export default useGeolocation;

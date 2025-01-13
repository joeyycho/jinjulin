//도로명 주소를 위도, 경도로 변환하는 커스텀 훅
//24.01.13.현재 사용하지 않음

import { useEffect, useState } from "react";

const useGeocode = () => {
  const [location, setLocation] = useState(null);

  const geocodeAddress = async (address) => {
    const clientId = process.env.REACT_APP_NAVER_MAP_CLIENT_ID;  // 네이버 클라우드에서 발급받은 클라이언트 ID
    const url = `https://naveropenapi.apis.naver.com/map/geocode?query=${encodeURIComponent(address)}`;

    const response = await fetch(url, {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_MAP_SECRET_KEY,  // 클라이언트 시크릿
      },
    });

    const data = await response.json();

    if (data && data.results && data.results.length > 0) {
      const { x, y } = data.results[0];  // x는 경도, y는 위도
      setLocation({ lat: parseFloat(y), lng: parseFloat(x) });
    } else {
      console.error('주소를 변환할 수 없습니다.');
    }
  };

  return { location, geocodeAddress };
};

export default useGeocode;

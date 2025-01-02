import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
// import axios from 'axios'
import styled from 'styled-components';
import DataCard from '../Component/DataCard';

const ListPage = () => {
  const [placeType, setPlaceType] = useState('식당');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  // 필터링된 데이터를 저장할 상태

  // 데이터 받아오기
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://opensheet.elk.sh/1P8hRYbzVLuwudduB7tMsXYncfZ8YPKcnXoZTlWK9iuE/response"
      )
        .then((res) => res.json())
        .then((data) => data);
      
      setData(result);  // 데이터를 가져와서 상태에 저장
    }
    fetchData();
  }, []);

  // placeType이 변경될 때마다 데이터를 필터링하여 업데이트
  useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter(item => item.placeType === placeType);
      // console.log('Filtered Data:', filtered);  // 필터링된 데이터 확인
      setFilteredData(filtered);
    }
  }, [placeType, data]);
  
  return (
    <>
      <Header />
      <Type>
        <label htmlFor="placeType"></label>
        <select
          id="placeType"
          value={placeType}
          onChange={(e) => setPlaceType(e.target.value)}  // placeType 변경
        >
          <option value="식당">식당</option>
          <option value="카페">카페</option>
          <option value="술집">술집</option>
          <option value="명소">명소</option>
          <option value="놀거리">놀거리</option>
        </select>
      </Type>
                <div>
                {/* <DataCard /> */}
                  <DataCard data={filteredData} />
                </div>
            </>
        );
    };
export default ListPage

const Type = styled.div`
  border-bottom: 1.5px solid #19AC48;
  margin: 1rem;
  padding-bottom: 0.5rem;
  text-align: center;
  color: #19AC48;
  & select {
    font-size: 1rem;
    /* padding: 0.5rem; */
    margin: 0.5rem;
    border: none;
    color: #19AC48;}
  `;
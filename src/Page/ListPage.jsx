import React, { useState } from 'react'
import Header from '../Component/Header'
// import axios from 'axios'
import DataCard from '../Component/DataCard'
import styled from 'styled-components';

const ListPage = () => {
    const [placeType, setPlaceType] = useState('식당');

    const data = fetch(`${process.env.REACT_APP_LIST_API}`)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  console.log(data);
    
  return (
    <>
      <Header />
                <Type>
                    <label htmlFor="placeType"></label>
                    <select
                        id="placeType"
                        value={placeType}
                        onChange={(e) => setPlaceType(e.target.value)}
                    >
                        <option value="식당">식당</option>
                        <option value="카페">카페</option>
                        <option value="술집">술집</option>
                        <option value="명소">명소</option>
                        <option value="놀거리">놀거리</option>
                    </select>
                </Type>
                <div>
                  <DataCard data={data} />
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
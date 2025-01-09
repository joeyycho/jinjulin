import React, { useEffect, useState } from 'react'
import DataCard from '../Component/DataCard';
import styled from 'styled-components';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const DongPage = () => {
  const [dong, setDong] = useState('전체');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

    // 데이터 받아오기
    useEffect(() => {
    async function fetchData() {
        setIsLoading(true); // 로딩 시작
        try {
            const result = await fetch(process.env.REACT_APP_LIST_API); // API URL
            const jsonData = await result.json();
            setData(jsonData); // 데이터를 가져와서 상태에 저장
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setIsLoading(false); // 로딩 종료
          }
        }
        fetchData();
      }, []);
    
      // placeType이 변경될 때마다 데이터를 필터링하여 업데이트
      useEffect(() => {
        if (data.length > 0) {
          const filtered = data.filter((item) => item.dong === dong);
          setFilteredData(filtered);
        //   console.log(filtered);
        }
      }, [dong, data]);
    
  return (
    <Wrapper>
      <Header/>
      <Page>
      <Type>
          <label htmlFor="dong"></label>
          <select
            id="dong"
            value={dong}
            onChange={(e) => setDong(e.target.value)} // placeType 변경
          >
            <option value="전체">전체</option>
            <option value="가좌동">가좌동</option>
            <option value="강남동">강남동</option>
            <option value="계동">계동</option>
            <option value="동성동">동성동</option>
            <option value="대안동">대안동</option>
            <option value="봉곡동">봉곡동</option>
            <option value="봉래동">봉래동</option>
            <option value="상봉동">상봉동</option>
            <option value="중안동">중안동</option>
            <option value="평거동">평거동</option>
            <option value="충무공동">충무공동</option>
            <option value="초전동">초전동</option>
            <option value="칠암동">칠암동</option>
            <option value="평거동">평거동</option>
            <option value="하대동">하대동</option>
            <option value="호탄동">호탄동</option>
          </select>
        </Type>
        <Map/>
        <div>
          {isLoading ? (
            <Text>데이터를 받아오고 있습니다...</Text> // 로딩 중일 때 표시
          ) : (
            <DataCard data={filteredData} />
          )}
        </div>
      </Page>
      <Footer/>
    </Wrapper>
  )
}

export default DongPage

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

const Page = styled.div`
flex: 1;  /* 남은 공간을 채워주도록 설정 */
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;   /* 세로 방향으로 정렬 */
min-height: 100vh;        /* 최소 높이를 화면 크기만큼 */
`;
const Text = styled.div`
    text-align: center;
    font-size: 14px;
    color: #19AC48;
`;
const Map = styled.div``;
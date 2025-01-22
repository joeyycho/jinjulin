import React, { useEffect, useState } from "react";
import DataCard from "../Component/DataCard";
import styled from "styled-components";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Map from "../Component/Map";

const DongPage = () => {
  const [dong, setDong] = useState("전체");
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
        // 데이터를 랜덤하게 섞기
        const shuffledData = jsonData.sort(() => Math.random() - 0.5);
        setData(shuffledData); // 섞은 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    }
    fetchData();
  }, []);

  // placeType이 변경될 때마다 데이터를 필터링하여 업데이트
  useEffect(() => {
    if (data.length > 0) {
      const filtered =
        dong === "전체" ? data : data.filter((item) => item.dong === dong);
      setFilteredData(filtered);
    }
  }, [dong, data]);

  return (
    <Wrapper>
      <Header />
      <Page>
        <Map />
        <Type>
          <label htmlFor="dong"></label>
          <select
            id="dong"
            value={dong}
            style={{ backgroundColor: "transparent" }}
            onChange={(e) => setDong(e.target.value)} // placeType 변경
          >
            <option value="전체">전체</option>
            <option value="가호동">가호동</option>
            <option value="상대동">상대동</option>
            <option value="상봉동">상봉동</option>
            <option value="상평동">상평동</option>
            <option value="성북동">성북동</option>
            <option value="신안동">신안동</option>
            <option value="이현동">이현동</option>
            <option value="중앙동">중앙동</option>
            <option value="천전동">천전동</option>
            <option value="초장동">초장동</option>
            <option value="충무공동">충무공동</option>
            <option value="평거동">평거동</option>
            <option value="판문동">판문동</option>
            <option value="하대동">하대동</option>
          </select>
        </Type>
        <div>
          {isLoading ? (
            <Text>데이터를 받아오고 있습니다...</Text> // 로딩 중일 때 표시
          ) : (
            <DataCard data={filteredData} />
          )}
        </div>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default DongPage;

const Type = styled.div`
  border-bottom: 1.5px solid #636038;
  margin: 1rem;
  padding-bottom: 0.5rem;
  text-align: center;
  color: #636038;
  & select {
    font-size: 1rem;
    /* padding: 0.5rem; */
    margin: 0.5rem;
    border: none;
    color: #636038;
  }
`;

const Page = styled.div`
  flex: 1; /* 남은 공간을 채워주도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  /* padding-top: 63px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
  background-color: #eae0d6;
`;

const Text = styled.div`
  text-align: center;
  font-size: 14px;
  color: #636038;
`;

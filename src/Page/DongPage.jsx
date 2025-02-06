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
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlace, setSelectedPlace] = useState(null); // 선택된 장소

  // 데이터 받아오기
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await fetch(process.env.REACT_APP_LIST_API);
        const jsonData = await result.json();
        const shuffledData = jsonData.sort(() => Math.random() - 0.5);
        setData(shuffledData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // dong이 변경될 때마다 데이터 필터링 & 선택된 장소 초기화
  useEffect(() => {
    if (data.length > 0) {
      const filtered =
        dong === "전체" ? data : data.filter((item) => item.dong === dong);
      setFilteredData(filtered);
      setSelectedPlace(null); // 동이 변경되면 선택된 장소 초기화
    }
  }, [dong, data]);

  // 선택된 placeName이 변경될 때 필터링
  const selectedPlaceData = selectedPlace
    ? data.find((item) => item.placeName === selectedPlace)
    : null;

  return (
    <Wrapper>
      <Header />
      <Page>
        <Map setSelectedPlace={setSelectedPlace} />
        <Type>
          <label htmlFor="dong"></label>
          <select
            id="dong"
            value={dong}
            style={{ backgroundColor: "transparent" }}
            onChange={(e) => setDong(e.target.value)}
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
            <Text>데이터를 받아오고 있습니다...</Text>
          ) : selectedPlaceData ? (
            <DataCard data={[selectedPlaceData]} />
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
    margin: 0.5rem;
    border: none;
    color: #636038;
  }
`;

const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eae0d6;
`;

const Text = styled.div`
  text-align: center;
  font-size: 14px;
  color: #636038;
`;

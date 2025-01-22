import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import styled from "styled-components";
import DataCard from "../Component/DataCard";
import Footer from "../Component/Footer";

const ListPage = () => {
  const [placeType, setPlaceType] = useState("식당");
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
      const filtered = data.filter((item) => item.placeType === placeType);
      setFilteredData(filtered);
    }
  }, [placeType, data]);

  return (
    <Wrapper>
      <Header />
      <Page>
        <Type>
          {["식당", "카페", "가게", "술집", "명소", "놀거리"].map((type) => (
            <Button
              key={type}
              active={placeType === type}
              onClick={() => setPlaceType(type)} // 버튼 클릭으로 placeType 변경
            >
              {type}
            </Button>
          ))}
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

export default ListPage;

const Type = styled.div`
  border-bottom: 1.5px solid #636038;
  margin: 1.5rem;
  text-align: center;
  color: #636038;
  /* color: #636038; */
`;

const Page = styled.div`
  /* padding-top: 63px; */
  flex: 1; /* 남은 공간을 채워주도록 설정 */
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

const Button = styled.button`
  /* margin: 0 5px; */
  padding: 10px 15px;
  border: none;
  font-weight: 440;
  border-top-left-radius: 5px; /* 위쪽 왼쪽 모서리 */
  border-top-right-radius: 5px; /* 위쪽 오른쪽 모서리 */
  background-color: ${(props) => (props.active ? "#636038" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#636038")};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #636038;
    color: white;
  }
`;

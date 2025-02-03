import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import MagazineCard from "../Component/MagazineCard";

const MagazinePage = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 기본적으로 로딩 상태

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // 로딩 시작
      try {
        const result = await fetch(process.env.REACT_APP_MAGAZINE_API); // API URL
        const jsonData = await result.json();
        setData(jsonData);
        console.log("데이터를 성공적으로 받아왔습니다:", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Page>
        <Title>Magazine</Title>
        <p>
          진주를 발견하신 분들을 찾고 있습니다.
          <br />
          <Line href="mailto:joinhui420@gmail.com">
            CONTACT | joinhui420@gmail.com
          </Line>
        </p>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : (
          <List>
            <MagazineCard data={Data} />
          </List>
        )}
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default MagazinePage;

const Wrapper = styled.div`
  color: #636038;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
  background-color: #eae0d6;
`;

const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  border-bottom: 1px solid #636038;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

const Line = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Page = styled.div`
  /* padding-top: 63px; */
  flex: 1; /* 남은 공간을 채워주도록 설정 */
  & p {
    text-align: center;
    font-size: 15px;
  }
`;

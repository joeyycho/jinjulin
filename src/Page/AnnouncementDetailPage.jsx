import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Component/Header";
import styled from "styled-components";
import Footer from "../Component/Footer";

const AnnouncementDetailPage = () => {
  const { id } = useParams(); // URL에서 id 값 추출
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // useNavigate는 컴포넌트 최상위에서 호출해야 합니다.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/Data/notice.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  // id에 해당하는 공지사항 찾기
  const announcement = data.find((item) => item.id === parseInt(id));

  if (!announcement) {
    return <p>공지사항을 찾을 수 없습니다.</p>;
  }
  // 텍스트 내의 URL을 <a> 태그로 변환하는 함수 (style 추가)
  const convertUrlsToLinks = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, (url) => {
      // <a> 태그에 style을 추가하여 밑줄 없애기
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">${url}</a>`;
    });
  };

  return (
    <Wrapper>
      <Header />
      <Page>
        <Title>NOTICE</Title>
        <Text>
          <Line>
            <Fine>제목</Fine>
            <Good>{announcement.title}</Good>
          </Line>
          <Line>
            <Fine>작성일</Fine>
            <Good>{announcement.createdAt}</Good>
          </Line>
          <Line>
            <Fine>작성자</Fine>
            <Good>{announcement.author}</Good>
          </Line>
          {/* 줄바꿈 처리 및 링크 변환 */}
          <TextBox
            dangerouslySetInnerHTML={{
              __html: convertUrlsToLinks(
                announcement.text.replace(/\n/g, "<br /><br />")
              ), // \n을 <br />로, URL을 <a>로 변환
            }}
          />
          <Button onClick={() => navigate(-1)}>목록</Button>{" "}
          {/* 이전 페이지로 이동 */}
        </Text>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default AnnouncementDetailPage;

const Wrapper = styled.div`
  color: #19ac48;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
`;
const Page = styled.div`
  flex: 1; /* 남은 공간을 채워주도록 설정 */
  padding-top: 63px;
`;
const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  /* border-bottom: 1px solid #19AC48; */
`;
const Fine = styled.div`
  width: 80px;
  text-align: left;
  align-items: center;
  display: flex;
  height: 20px;
`;
const Good = styled.div`
  height: 20px;
`;

const Text = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 14px;
  /* margin-top: 0.5rem; */
  letter-spacing: 2px; /* 자간을 설정 (필요에 따라 값 조정) */
  white-space: pre-wrap; /* \n을 줄바꿈으로 처리 */
  word-wrap: break-word; /* 긴 단어가 줄을 넘어가지 않도록 처리 */
  font-family: Arial, sans-serif; /* 원하는 폰트 설정 */
  line-height: 1.6; /* 줄 간격 설정 */
`;

const Line = styled.div`
  display: flex;
  height: 20px;
`;

const TextBox = styled.div`
  border: 1px solid #19ac48;
  padding: 1rem;
  margin-top: 1rem;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #19ac48;
  text-align: center;
  height: 40px;
  margin-top: 30px;
  font-weight: 500;
`;

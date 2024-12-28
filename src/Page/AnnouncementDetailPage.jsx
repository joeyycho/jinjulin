import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Component/Header';
import styled from 'styled-components';
import Footer from '../Component/Footer';

const AnnouncementDetailPage = () => {
  const { id } = useParams(); // URL에서 id 값 추출
  const navigate = useNavigate();  // useNavigate는 컴포넌트 최상위에서 호출해야 합니다.

  // 더미 데이터 (실제로는 API 호출 등을 할 수 있습니다)
  const dummyData = [
    { id: 1, title: 'First Announcement', createdAt: '2023-01-01', text: 'This is the first announcement.', author: 'Admin' },
    { id: 2, title: 'Second Announcement', createdAt: '2023-02-01', text: 'This is the second announcement.', author: 'Admin' },
    // Add more dummy data as needed
  ];

  // id에 해당하는 공지사항 찾기
  const announcement = dummyData.find((item) => item.id === parseInt(id));

  if (!announcement) {
    return <p>공지사항을 찾을 수 없습니다.</p>;
  }

  return (
    <Wrapper>
      <Header />
      <Title>NOTICE</Title>
      <Text>
        <Line><Fine>제목</Fine><Good>{announcement.title}</Good></Line>
        <Line><Fine>작성일</Fine><Good>{announcement.createdAt}</Good></Line>
        <Line><Fine>작성자</Fine><Good>{announcement.author}</Good></Line>
        <TextBox>{announcement.text}</TextBox>
        <Button onClick={() => navigate(-1)}>목록</Button>  {/* 이전 페이지로 이동 */}
      </Text>
      <Footer />
    </Wrapper>
  );
};

export default AnnouncementDetailPage;

const Wrapper = styled.div`
  color: #19AC48;
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

const  Text = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 14px;
    /* margin-top: 0.5rem; */
    `;

const Line = styled.div`
    display: flex;
    height: 20px;
`;
    
const TextBox = styled.div`
    border: 1px solid #19AC48;
    padding: 1rem;
    margin-top: 1rem;
    `;
const Button = styled.div`
    display: flex;
    justify-content: center;   
    align-items: center;
    border: 1px solid #19AC48;
    text-align: center;
    height: 40px;
    margin-top: 30px;
    font-weight: 500;
`;
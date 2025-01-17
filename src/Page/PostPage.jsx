import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import styled from "styled-components";
import Footer from "../Component/Footer";

const formatDate = (dateString) => {
  const date = new Date(dateString); // ISO 형식의 날짜 문자열을 Date 객체로 변환
  const year = date.getFullYear().toString().slice(2, 4); // 'yy' 형식
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 'mm' 형식
  const day = String(date.getDate()).padStart(2, "0"); // 'dd' 형식
  const hours = String(date.getHours()).padStart(2, "0"); // 'hh' 형식
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 'mm' 형식

  return `${year}/${month}/${day} ${hours}:${minutes}`; // 'yy/mm/dd hh:mm' 형식
};

const PostPage = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`);
  };
  // 상태 관리
  const [posts, setPosts] = useState([]);

  const postapi = process.env.REACT_APP_POST_API;

  // 데이터를 받아오는 useEffect
  useEffect(() => {
    axios
      .get(`${postapi}/api/posts`) // 경로를 /api/posts로 수정
      .then((response) => {
        // 받은 데이터를 createdAt을 기준으로 내림차순 정렬
        const sortedPosts = response.data.sort((a, b) => {
          // createdAt을 날짜 객체로 변환하고, 내림차순으로 정렬
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setPosts(sortedPosts); // 정렬된 데이터를 상태로 저장
        // console.log("게시글을 가져오는 데 성공했습니다:", response);
      })
      .catch((error) => {
        console.error("게시글을 가져오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Page>
        <Title>게시판</Title>
        <Button onClick={() => navigate("/post/write")}>글쓰기</Button>
        <List>
          {posts.map((post) => (
            <ListDetail key={post._id} onClick={() => handleClick(post._id)}>
              <p>{post.title}</p>
              <p>{post.author}</p>
              <p>{formatDate(post.createdAt)}</p>
            </ListDetail>
          ))}
        </List>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default PostPage;

const Wrapper = styled.div`
  color: #19ac48;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
`;

const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  border-bottom: 1px solid #19ac48;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

const ListDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #19ac48;
  /* height: 42px; */
`;

const Page = styled.div`
  padding-top: 63px;
  flex: 1; /* 남은 공간을 채워주도록 설정 */
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #19ac48;
  text-align: center;
  height: 40px;
  /* margin-top: 30px; */
  font-weight: 500;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: #19ac48;
    color: white;
  }
`;

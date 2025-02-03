import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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

const PostDetailPage = () => {
  const { id } = useParams(); // URL에서 id 값 추출
  const navigate = useNavigate(); // useNavigate는 컴포넌트 최상위에서 호출해야 합니다.
  const [post, setPost] = useState([]);

  const postapi = process.env.REACT_APP_POST_API;

  // 데이터를 받아오는 useEffect
  useEffect(() => {
    axios
      .get(`${postapi}/api/posts/${id}`) // 경로를 /api/posts로 수정
      .then((response) => {
        setPost(response.data); // 받아온 데이터를 상태로 저장
        // console.log("게시글을 가져오는 데 성공했습니다:", response);
      })
      .catch((error) => {
        console.error("게시글을 가져오는 중 오류 발생:", error);
      });
  }, [id]);

  // 비밀번호 확인 함수
  const checkPassword = (password) => {
    return axios
      .post(`${postapi}/api/posts/check-password`, { id, password })
      .then((response) => response.data.success) // 서버에서 비밀번호가 맞으면 true 반환
      .catch(() => false); // 비밀번호가 틀리면 false 반환
  };

  // 수정 함수
  const handleEdit = async () => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (password) {
      const isValid = await checkPassword(password); // 비밀번호 확인
      if (!isValid) {
        alert("비밀번호가 틀렸습니다.");
        return;
      }

      const updatedPost = {
        ...post,
        title: prompt("수정할 제목을 입력하세요:", post.title),
        text: prompt("수정할 내용을 입력하세요:", post.text),
      };
      axios
        .patch(`${postapi}/api/posts/${id}`, updatedPost)
        .then((response) => {
          alert("게시글이 수정되었습니다.");
          setPost(response.data); // 수정된 데이터로 상태 업데이트
          window.location.reload(); // 페이지 새로고침
        })
        .catch((error) => {
          console.error("게시글 수정 중 오류 발생:", error);
        });
    }
  };

  // 삭제 함수
  const handleDelete = async () => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (password) {
      const isValid = await checkPassword(password); // 비밀번호 확인
      if (!isValid) {
        alert("비밀번호가 틀렸습니다.");
        return;
      }

      // 비밀번호가 맞으면 삭제 요청
      axios
        .delete(`${postapi}/api/posts/${id}`, { data: { password } }) // 비밀번호를 본문에 포함
        .then(() => {
          alert("게시글이 삭제되었습니다.");
          navigate("/post"); // 목록 페이지로 이동
        })
        .catch((error) => {
          console.error("게시글 삭제 중 오류 발생:", error);
          alert("게시글 삭제 실패");
        });
    }
  };

  if (!post) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  // 텍스트 내의 URL을 <a> 태그로 변환하는 함수
  const convertUrlsToLinks = (text) => {
    if (!text) return ""; // text가 없으면 빈 문자열 반환
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">${url}</a>`;
    });
  };

  return (
    <Wrapper>
      <Header />
      <Page>
        <Title>게시판</Title>
        <Text>
          <Line>
            <Fine>제목</Fine>
            <Good>{post.title}</Good>
          </Line>
          <Line>
            <Fine>작성일</Fine>
            <Good>{formatDate(post.createdAt)}</Good>
          </Line>
          <Line>
            <Fine>작성자</Fine>
            <Good>{post.author}</Good>
          </Line>
          {/* 줄바꿈 처리 및 링크 변환 */}
          <TextBox
            dangerouslySetInnerHTML={{
              __html: post.text
                ? convertUrlsToLinks(post.text.replace(/\n/g, "<br /><br />")) // \n을 <br />로 변환
                : "<p>내용이 없습니다.</p>", // 내용이 없는 경우
            }}
          />
          {/* 이미지 표시 */}
          {/* {post.picture && (
            <img
              src={post.picture} // 이미지 URL을 사용
              alt="게시글 이미지"
              style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }} // 이미지 스타일링
            />
          )} */}
          <ButtonWrapper>
            <Button1 onClick={handleEdit}>수정</Button1>
            <Button2 onClick={handleDelete}>삭제</Button2>
          </ButtonWrapper>
          <Button onClick={() => navigate(-1)}>목록</Button>
          {/* 이전 페이지로 이동 */}
        </Text>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default PostDetailPage;

const Wrapper = styled.div`
  color: #636038;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
  background-color: #eae0d6;
`;

const Page = styled.div`
  flex: 1; /* 남은 공간을 채워주도록 설정 */
  /* padding-top: 63px; */
`;

const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  /* border-bottom: 1px solid #636038; */
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
  line-height: 1.6; /* 줄 간격 설정 */
`;

const Line = styled.div`
  display: flex;
  height: 20px;
`;

const TextBox = styled.div`
  border: 1px solid #636038;
  padding: 1rem;
  margin-top: 1rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #636038;
  text-align: center;
  font-size: 14px;
  height: 40px;
  margin-top: 30px;
  font-weight: 500;
  cursor: pointer;
`;

const Button1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #636038;
  text-align: center;
  font-size: 14px;
  height: 40px;
  /* margin-top: 30px; */
  font-weight: 500;
  cursor: pointer;
  width: 50%;
`;

const Button2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #636038;
  text-align: center;
  font-size: 14px;
  height: 40px;
  font-weight: 500;
  cursor: pointer;
  width: 50%;
  background-color: #636038;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

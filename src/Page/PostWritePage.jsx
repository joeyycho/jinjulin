import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import styled from "styled-components";
import Footer from "../Component/Footer";

const PostWritePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    text: "",
    password: "",
    picture: null,
    createdAt: new Date().toISOString(),
  });

  const postapi = process.env.REACT_APP_POST_API;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes
  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     picture: e.target.files[0],
  //   });
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare form data for API request
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Send a POST request to the server
      const response = await axios.post(`${postapi}/api/posts`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("글이 성공적으로 작성되었습니다!");
        navigate(-1); // Navigate back to the previous page
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("글 작성 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Wrapper>
      <Header />
      <Page>
        <Title>게시판</Title>
        <Text>
          <form onSubmit={handleSubmit}>
            <Line>
              <label>
                <Fine>제목:</Fine>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
            </Line>
            <Line>
              <label>
                <Fine>작성자:</Fine>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </label>
            </Line>
            <label>
              <Fine>내용:</Fine>
              <TextBox
                as="textarea"
                name="text"
                value={formData.text}
                onChange={handleChange}
                placeholder="욕설 및 음란성 내용을 포함하거나, 타인을 비난하는 내용 작성 시 제재당할 수 있습니다."
                required
              ></TextBox>
            </label>
            {/* <Line>
              <label>
                <Fine>사진 (선택):</Fine>
                <input
                  type="file"
                  name="picture"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </Line> */}
            <Line>
              <label>
                <Fine>비밀번호:</Fine>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="글 수정 및 삭제 시 사용"
                  required
                />
              </label>
            </Line>
            <button type="submit">글 작성</button>
            <Button onClick={() => navigate(-1)}>목록</Button>{" "}
            {/* 이전 페이지로 이동 */}
          </form>
        </Text>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default PostWritePage;

const Wrapper = styled.div`
  color: #636038;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
  background-color: #eae0d6;
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
  /* border-bottom: 1px solid #636038; */
`;

const Fine = styled.div`
  width: 100px;
  text-align: left;
  align-items: center;
  display: flex;
  height: 20px;
`;

const Text = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 14px;
  align-items: center;
  display: flex;
  flex-direction: column;
  letter-spacing: 2px; /* 자간을 설정 (필요에 따라 값 조정) */
  white-space: pre-wrap; /* \n을 줄바꿈으로 처리 */
  word-wrap: break-word; /* 긴 단어가 줄을 넘어가지 않도록 처리 */
  font-family: Arial, sans-serif; /* 원하는 폰트 설정 */
  line-height: 1.6; /* 줄 간격 설정 */
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40px;
    margin-top: 30px;
    font-weight: 500;
    cursor: pointer;
    background-color: #636038;
    color: white;
    width: 100%;
    font-size: 14px;
    border: 1px solid #636038;
    &:hover {
      background: transparent;
      color: #636038;
      border: 1px solid #636038;
    }
  }
`;

const Line = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 1rem;
  width: 100%;
  & label {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  & input {
    height: 20px;
    border: none;
    width: 200px;
    border-bottom: 1px solid #636038;
    border-radius: none;
  }
`;

const TextBox = styled.div`
  border: 1px solid #636038;
  padding: 1rem;
  resize: none;
  margin-bottom: 1rem;
  width: 300px;
  height: 200px;
  border-radius: none;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #636038;
  text-align: center;
  height: 40px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  color: #636038;
  width: 100%;
  /* &:hover {
    background: #636038;
    color: white;
  } */
`;

import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const MagazineDetailPage = () => {
  const { id } = useParams(); // URL에서 id 값 추출
  const navigate = useNavigate();
  const location = useLocation(); // state로 전달된 data 받기

  const [item, setItem] = useState(null);
  const data = location.state?.data; // data가 state로 전달된 경우

  useEffect(() => {
    if (data && data.length > 0) {
      const foundItem = data.find((item) => String(item.id) === String(id));
      setItem(foundItem);
    }
  }, [id, data]);

  // item이 없으면 에러 메시지 출력
  if (!item) {
    return <p>해당 매거진을 찾을 수 없습니다.</p>;
  }

  return (
    <Wrapper>
      <Header />
      <Page>
        <Title>MAGAZINE</Title>
        <Text>
          <MagazineTitle>
            {item.createdAt}
            <br />
            <span>{item.title}</span>
            <text>{item.placeName} 소비자 인터뷰</text>
            <Line>📍{item.location}</Line>
          </MagazineTitle>
          <TextBox>
            <CardImage src={item.img1} alt="img" />
            <br />
            <span>{item.q1}</span>
            <br />
            {item.a1} <br /> <br />
            <span>{item.q2}</span>
            <br />
            {item.a2} <br />
            <br />
            <span>{item.q3}</span>
            <br />
            {item.a3} <br />
            <CardImage src={item.img2} alt="img" /> <br />
            <span>{item.q4}</span>
            <br />
            {item.a4} <br /> <br />
            <CardImage src={item.img3} alt="img" />{" "}
            <CardImage src={item.img4} alt="img" />
            <span>{item.q5}</span>
            <br />
            {item.a5} <br /> <br />
            <span>{item.q6}</span>
            <br />
            {item.a6} <br /> <br />
          </TextBox>
          <Button onClick={() => navigate(-1)}>목록</Button>{" "}
        </Text>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default MagazineDetailPage;

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
const CardImage = styled.img`
  width: 100%;
  height: 100%; // 높이를 100%로 설정하여 부모 요소에 맞추기
  /* border-radius: 5px; */
  background-color: #f5f5f5;
  object-fit: cover; // 이미지 비율 유지하면서 부모 크기에 맞게 자르기
  aspect-ratio: 1.5; // 원하는 비율을 설정 (여기선 1.5:1 비율)
  border: 2px solid #636038;
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
  border: 1px solid #636038;
  padding: 1rem;
  margin-top: 1rem;
  span {
    font-weight: 800;
  }
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
`;

const MagazineTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  span {
    font-size: 20px;
    font-weight: 800;
  }
  text {
    font-size: 16px;
    font-weight: 600;
    color: #636038b5;
  }
`;

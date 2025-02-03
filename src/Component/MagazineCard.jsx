import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MagazineCard = ({ data }) => {
  console.log("data:", data);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/magazine/${id}`, { state: { data } });
  };

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <CardWrapper key={item.id}>
            <CardBody onClick={() => handleClick(item.id)}>
              <ImageWrapper>
                <CardImage src={item.img1} alt="thumbnail" />
                <Overlay />
              </ImageWrapper>
              <Title>{item.title}</Title>
              <Description>{item.a1}</Description>
            </CardBody>
          </CardWrapper>
        ))
      ) : (
        <p>해당 유형의 데이터가 없습니다.</p>
      )}
    </>
  );
};
export default MagazineCard;

const CardWrapper = styled.div`
  border-bottom: 1.5px solid #636038;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  color: #636038;
  cursor: pointer;
  background-color: #ffffff95;
  margin-bottom: 2rem;
`;

const CardBody = styled.div`
  margin: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border: 2px solid #636038;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Overlay가 튀어나오지 않도록 수정 */
`;

const Title = styled.p`
  font-size: 18px; /* 더 큰 글씨 크기 적용 */
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%; /* 전체 너비 사용 */
  display: flex; /* flex를 사용하여 정렬 보장 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-items: center;
  margin-left: 5px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #636038ba;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 3줄 이후 ... 표시 */
`;

import styled from "styled-components";

// Left 말풍선 스타일
const Left = styled.div`
  max-width: 60%; /* 말풍선 너비 */
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  margin: 10px 0;
  color: #333; /* 텍스트 색상 */
  background-color: rgb(255, 255, 255); /* 말풍선 배경 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */
  align-self: flex-start;
  border-top-left-radius: 0;

  &::before {
    content: "";
    position: absolute;
    left: -12px; /* 꼬리 위치 수정 */
    top: 12px; /* 꼬리 높이 조정 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 12px 8px 0; /* 삼각형 꼬리 크기 */
    border-color: transparent rgb(255, 255, 255) transparent transparent;
  }

  &::after {
    content: "";
    position: absolute;
    left: -8px; /* 꼬리 그림자 위치 수정 */
    top: 12px; /* 그림자 높이 조정 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0; /* 그림자 삼각형 크기 */
    border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;
    z-index: -1; /* 그림자를 뒤로 보냄 */
  }
`;

// Right 말풍선 스타일
const Right = styled.div`
  max-width: 60%; /* 말풍선 너비 */
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  margin: 10px 0;
  color: #333; /* 텍스트 색상 */
  background-color: rgb(255, 255, 255); /* 말풍선 배경 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */
  align-self: flex-end;
  border-top-right-radius: 0;

  &::before {
    content: "";
    position: absolute;
    right: -12px; /* 꼬리 위치 수정 */
    top: 12px; /* 꼬리 높이 조정 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 12px; /* 삼각형 꼬리 크기 */
    border-color: transparent transparent transparent rgb(255, 255, 255);
  }

  &::after {
    content: "";
    position: absolute;
    right: -8px; /* 꼬리 그림자 위치 수정 */
    top: 12px; /* 그림자 높이 조정 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 10px; /* 그림자 삼각형 크기 */
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.1);
    z-index: -1; /* 그림자를 뒤로 보냄 */
  }
`;

export { Left, Right };

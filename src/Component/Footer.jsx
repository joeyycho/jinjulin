import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Text><a href='/notice'>공지사항 / </a><a href='https://www.jinju.go.kr/main.web' target='_blank' rel="noreferrer">진주시청 사이트 바로가기</a></Text>
      <Text>© 2025 JinJuLin. All rights reserved.</Text>
    </Wrapper>
  )
}

export default Footer

const Text = styled.div`
  color: #19AC48;
  text-align: center;
  font-size: 14px;
  & a {
  text-decoration: none;
  color: #19AC48;
  }
`;

const Wrapper = styled.div`
  padding: 20px 0;             /* 위 아래 여백을 20px로 설정 */
  position: relative;          /* 상대적인 위치 */
  bottom: 0;                   /* 페이지 하단에 배치 */
  width: 100%;   
  `;
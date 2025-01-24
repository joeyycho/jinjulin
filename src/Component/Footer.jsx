import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <img
        src="/image/footerimg.png"
        alt="footer"
        style={{ width: "100%", marginTop: "50px" }}
      />
      <Wrapper>
        <Text>
          <Link to="/notice">공지사항 / </Link>
          <a
            href="https://www.jinju.go.kr/main.web"
            target="_blank"
            rel="noreferrer"
          >
            진주시청 사이트 바로가기
          </a>
        </Text>
        <Text>© 2025 JinJuLin. All rights reserved.</Text>
      </Wrapper>
    </>
  );
};

export default Footer;

const Text = styled.div`
  color: #636038;
  text-align: center;
  font-size: 14px;
  & a {
    text-decoration: none;
    color: #636038;
  }
`;

const Wrapper = styled.div`
  padding: 20px 0; /* 위 아래 여백을 20px로 설정 */
  position: relative; /* 상대적인 위치 */
  bottom: 0; /* 페이지 하단에 배치 */
  width: 100%;
  background-color: #edc192;
`;

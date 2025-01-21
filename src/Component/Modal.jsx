import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

const Modal = ({ isOpen, setShowModal }) => {
  return (
    <>
      <Wrapper className={isOpen ? "open" : ""}>
        <Background>
          <LinkStyled to="/" onClick={() => setShowModal(false)}>
            HOME
          </LinkStyled>
          <LinkStyled to="/list" onClick={() => setShowModal(false)}>
            List
          </LinkStyled>
          <LinkStyled to="/map" onClick={() => setShowModal(false)}>
            지도
          </LinkStyled>
          <LinkStyled to="/post" onClick={() => setShowModal(false)}>
            게시판
          </LinkStyled>
          <LinkStyled to="/notice" onClick={() => setShowModal(false)}>
            공지사항
          </LinkStyled>
        </Background>
        <img src="/image/wave.png" alt="wave" />
      </Wrapper>
    </>
  );
};

export default Modal;

// Keyframe for the sliding in animation (from top to bottom)
const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Keyframe for the sliding out animation (from bottom to top)
const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 1; /* Modal의 z-index를 낮게 설정 */

  & img {
    width: 100%;
  }

  animation: ${({ className }) =>
    className === "open"
      ? css`
          ${slideIn} 0.3s ease-out
        `
      : css`
          ${slideOut} 0.3s ease-in
        `};

  &.open {
    opacity: 1;
    pointer-events: auto;
  }
`;

const LinkStyled = styled(Link)`
  font-size: 20px;
  /* font-family: "Yeongdeok Haeparang"; */
  color: #636038;
  height: 30px;
  margin-top: 15px;
  text-decoration: none;
  /* border-bottom: 1.5px solid white; */
  font-weight: 500;
`;

const Background = styled.div`
  padding-top: 60px;
  background: #70b8c6;
  display: flex;
  flex-direction: column;
`;

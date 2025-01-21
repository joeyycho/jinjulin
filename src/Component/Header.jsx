import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);

  // 아이콘 클릭 시 모달 토글
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Wrapper>
        <EasterEgg>
          {/* onClick={() => (window.location.href = "/welcome")} */}
          <img src="/image/seashellwp.png" alt="shell" />
        </EasterEgg>
        <Logo onClick={() => (window.location.href = "/")}>
          <img src="/image/Logo1.png" alt="Logo" />
        </Logo>
        <IconWrapper onClick={toggleModal}>
          <Icon className={showModal ? "active" : ""} />
        </IconWrapper>
      </Wrapper>
      <Modal isOpen={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  /* border-bottom: 1px solid #e0e0e0; */
  /* background: #70b8c6; */
  /* color: white; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const IconWrapper = styled.div`
  width: 22px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 10; /* Modal보다 높은 z-index로 설정 */
`;

const Icon = styled.div`
  width: 22px;
  height: 2.5px;
  background-color: #636038;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 22px;
    height: 2.5px;
    background-color: #636038;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: -10px;
    left: 0;
  }

  &::after {
    top: 10px;
    left: 0;
  }

  &.active {
    background-color: transparent;
  }

  &.active::before {
    top: 0;
    transform: rotate(45deg);
  }

  &.active::after {
    top: 0;
    transform: rotate(-45deg);
  }
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  & img {
    height: 30px;
  }
`;

const EasterEgg = styled.div`
  & img {
    height: 30px;
  }
`;

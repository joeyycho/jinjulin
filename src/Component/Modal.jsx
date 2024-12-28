import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes, css } from 'styled-components'

const Modal = ({ isOpen, setShowModal }) => {
  return (
    <Wrapper className={isOpen ? 'open' : ''}>
      <LinkStyled to="/" onClick={() => setShowModal(false)}>
        HOME
      </LinkStyled>
      <LinkStyled to="/list" onClick={() => setShowModal(false)}>
        List
      </LinkStyled>
      <LinkStyled to="/notice" onClick={() => setShowModal(false)}>
        공지사항
      </LinkStyled>
    </Wrapper>
  )
}

export default Modal

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
    bottom: 0;
    left: 0;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 3rem;
    text-align: center;
    /* align-items: center; */
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
    
    // Apply animation based on the 'open' class
    animation: ${({ className }) =>
      className === 'open'
        ? css`${slideIn} 0.3s ease-out`
        : css`${slideOut} 0.3s ease-in`};
    
    &.open {
        opacity: 1;
        pointer-events: auto;
    }
`;

const LinkStyled = styled(Link)`
    font-size: 20px;
    color: #19AC48;
    height: 30px;
    margin-top: 10px;
    text-decoration: none;
    border-bottom: 1.5px solid #19AC48;
`;
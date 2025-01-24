import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <NavBar>
        <NavItem>
          <Link to="/list">LIST</Link>
        </NavItem>
        <NavItem>
          <Link to="/map">지도</Link>
        </NavItem>
        <NavItem>
          <Link to="/post">게시판</Link>
        </NavItem>
        <NavItem>
          <Link to="/notice">공지사항</Link>
        </NavItem>
      </NavBar>
    </>
  );
};

export default Nav;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 15%;
  left: 0;
  border-left: 1.5px solid #636038;
  text-align: left;
  pointer-events: none; /* Prevent interactions */
  z-index: 1;
  width: auto;
  height: auto;

  a {
    pointer-events: auto; /* Allow link interaction */
    color: #636038;
    text-decoration: none;
    width: auto;
    height: auto;
  }
`;

const NavItem = styled.div`
  padding: 10px 10px;
  border: none;
  font-weight: 440;
  text-decoration: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: auto;
  height: auto;

  &:hover {
    background-color: #636038;
    color: white;
    font-weight: 550;
  }
`;

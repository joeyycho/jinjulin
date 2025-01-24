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
        <NavItem2>
          <Link to="/map">지도</Link>
        </NavItem2>
        <NavItem3>
          <Link to="/post">게시판</Link>
        </NavItem3>
        <NavItem4>
          <Link to="/notice">공지사항</Link>
        </NavItem4>
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
  /* background-color: white; */

  &:hover {
    background-color: #636038;
    color: white;
    font-weight: 550;
  }
`;

const NavItem2 = styled.div`
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
  height: 50px;
  /* background-color: white; */

  &:hover {
    background-color: #636038;
    color: white;
    font-weight: 550;
  }
`;

const NavItem3 = styled.div`
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
  height: 60px;
  /* background-color: white; */

  &:hover {
    background-color: #636038;
    color: white;
    font-weight: 550;
  }
`;

const NavItem4 = styled.div`
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
  height: 70px;
  /* background-color: white; */

  &:hover {
    background-color: #636038;
    color: white;
    font-weight: 550;
  }
`;

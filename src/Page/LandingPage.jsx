import React from 'react'
import Header from '../Component/Header'
import styled from 'styled-components'
import Footer from '../Component/Footer'

const LandingPage = () => {
  return (
    <Wrapper>
      <Header />
      <Page>
        <h2>Welcome to JinJuLin!</h2>
        <p>Now It's under construction . . .</p>
      </Page>
      <Footer />
    </Wrapper>
  )
}

export default LandingPage

const Page = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 20px;
    color: #19AC48;
    flex: 1;  /* 남은 공간을 채워주도록 설정 */
    `

const Wrapper = styled.div`
display: flex;
flex-direction: column;   /* 세로 방향으로 정렬 */
min-height: 100vh;        /* 최소 높이를 화면 크기만큼 */
`;
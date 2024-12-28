import React from 'react'
import Header from '../Component/Header'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Page>
        <h2>Welcome to JinJuLin!</h2>
        <p>Now It's under construction . . .</p>
      </Page>
    </>
  )
}

export default LandingPage

const Page = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 20px;
    color: #19AC48;
    `
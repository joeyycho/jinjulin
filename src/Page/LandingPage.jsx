import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const MAX_LETTERS = 20; // 글자 띠 최대 개수
const ADD_DELAY = 100; // 글자 띠 추가 간격 (ms)

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [letters, setLetters] = useState([]);
  const [isAdding, setIsAdding] = useState(false); // 추가 타이밍 관리

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      if (!isAdding) {
        setIsAdding(true);
        setTimeout(() => {
          setLetters((prevLetters) => {
            const newLetters = [
              ...prevLetters,
              {
                x: e.clientX,
                y: e.clientY,
                id: Date.now(),
                color: getRandomColor(), // 랜덤 색상 추가
              },
            ];
            return newLetters.slice(-MAX_LETTERS); // 최대 개수를 초과하면 오래된 글자 띠 제거
          });
          setIsAdding(false);
        }, ADD_DELAY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isAdding]);

  return (
    <Wrapper>
      <HeaderWrapper><Header /></HeaderWrapper>
      <Page>
      <WelcomeText>Welcome to JinJu</WelcomeText>
        {letters.map((letter) => (
          <LetterRing
            key={letter.id}
            x={letter.x}
            y={letter.y}
            color={letter.color} // 랜덤 색상 전달
          >
            {[...Array(24)].map((_, idx) => (
              <Text
                key={idx}
                style={{
                  transform: `rotate(${idx * 15}deg) translate(0, -50px)`,
                }}
              >
                A
              </Text>
            ))}
          </LetterRing>
        ))}
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;

const Page = styled.div`
  text-align: center;
  margin-top: 0; /* 헤더와 바로 연결 */
  font-size: 20px;
  color: #19ac48;
  flex: 1;
  position: relative; /* 글자 띠의 부모 */
  overflow: hidden; /* 화면 밖으로 나가는 애니메이션 허용 */
  width: 100vw; /* 화면 너비를 꽉 채움 */
  height: 100vh; /* 화면 높이를 꽉 채움 */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: fixed; /* 헤더를 고정 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* 헤더를 애니메이션 위로 올림 */
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 헤더 */
`;

const expandAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  80% {
    transform: scale(5); /* 화면 크기에 닿을 정도로 확대 */
    opacity: 0.3; /* 점점 연해짐 */
  }
  100% {
    transform: scale(5);
    opacity: 0; /* 사라지기 직전 */
  }
`;

const bounceAnimation = keyframes`
  0% {
    transform: scale(5) translate(0, 0);
  }
  100% {
    transform: scale(5) translate(100px, 100px); /* 화면 밖으로 튕겨나감 */
    opacity: 0;
  }
`;

const LetterRing = styled.div`
  position: absolute;
  top: ${({ y }) => y - 50}px;
  left: ${({ x }) => x - 50}px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${expandAnimation} 3s ease-out forwards, ${bounceAnimation} 1s ease-out 3s forwards;
  color: ${({ color }) => color};
`;


const Text = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  transition: transform 0.2s ease-out;
`;
const WelcomeText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  font-size: 1rem; /* 글자 크기 */
  font-weight: bold;
  color: #19ac48;
`;

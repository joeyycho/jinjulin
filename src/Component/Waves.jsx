import React from "react";
import styled from "styled-components";

const Waves = () => {
  return (
    <Wave>
      <svg
        className="wave wave1"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z"></path>
      </svg>
      <svg
        className="wave wave2"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path d="M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50 L1200,100 L0,100 Z"></path>
      </svg>
      <svg
        className="wave wave3"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path d="M0,50 C300,100 600,0 900,50 C1200,100 1500,0 1800,50 L1800,100 L0,100 Z"></path>
      </svg>
      <svg
        className="wave wave4"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path d="M0,50 C250,0 500,100 750,50 C1000,0 1250,100 1500,50 L1500,100 L0,100 Z"></path>
      </svg>
    </Wave>
  );
};

export default Waves;

const Wave = styled.div`
  position: relative;
  width: 100%;
  height: 40vh; /* 화면의 세로 40% */
  overflow: hidden;
  transform: rotate(180deg); /* 화면 상단에서 아래로 내려오는 파도 */

  svg {
    position: absolute;
    top: 0; /* 화면 최상단에 고정 */
    left: 0;
    width: 200%;
    height: 100%;
    transform-origin: top; /* top을 기준으로 움직임 */
  }

  .wave {
    animation: waveVertical 5s ease-in-out infinite,
      waveCurve 10s linear infinite;
  }

  .wave1 {
    fill: #e1f9fb;
    animation-delay: 0s, 0s;
  }

  .wave2 {
    fill: #afe1ea;
    animation-delay: 1s, -2s;
  }

  .wave3 {
    fill: #7fc3cc;
    animation-delay: 2s, -4s;
  }

  .wave4 {
    fill: #70b8c6;
    animation-delay: 3s, -6s;
  }

  /* Bottom이 위아래로 움직이는 애니메이션 */
  @keyframes waveVertical {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px); /* 아래로 이동 */
    }
    100% {
      transform: translateY(0); /* 원래 위치로 복귀 */
    }
  }

  /* 곡선의 굴곡이 변화하는 애니메이션 */
  @keyframes waveCurve {
    0% {
      d: path(
        "M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z"
      );
    }
    50% {
      d: path(
        "M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50 L1200,100 L0,100 Z"
      );
    }
    100% {
      d: path(
        "M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z"
      );
    }
  }
`;

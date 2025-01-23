import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import DataCard from "./DataCard";
import DiceIcon from "./DiceIcon";

const ModalMenu = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await fetch(process.env.REACT_APP_OFFER_API);
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isOpen) fetchData();
  }, [isOpen]);

  useEffect(() => {
    if (data.length > 0 && filter) {
      const filteredData = data.filter((item) => item[filter] === "true");
      if (filteredData.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        setSelectedData(filteredData[randomIndex]);
      } else {
        setSelectedData(null);
      }
    }
  }, [data, filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  if (!isOpen) return null;

  return (
    <Wrapper
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={() => {
        onClose(); // 모달 닫기
        setFilter(""); // 필터 초기화
      }}
    >
      {" "}
      <Content onClick={(e) => e.stopPropagation()}>
        <SelectContainer>
          <Select onChange={handleChange} value={filter}>
            <Option value="">지금은...</Option>
            <Option value="lunch">점심</Option>
            <Option value="dinner">저녁</Option>
          </Select>
        </SelectContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : !filter ? (
          <AnimatedText>
            {Array.from("𓇼 𓆉 𓆝 𓆡⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼").map((char, index) => (
              <AnimatedLetter key={index} delay={index * 0.1}>
                {char.trim() ? char : "\u00A0"}
              </AnimatedLetter>
            ))}
          </AnimatedText>
        ) : selectedData ? (
          <Wrapper2>
            <Bar>
              <Blank />
              <Text>이건 어때요?</Text>
              <Button
                onClick={() => {
                  const filteredData = data.filter(
                    (item) => item[filter] === "true"
                  );
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(
                      Math.random() * filteredData.length
                    );
                    setSelectedData(filteredData[randomIndex]);
                  }
                }}
              >
                <DiceIcon />
              </Button>
            </Bar>
            <DataCard data={[selectedData]} />
          </Wrapper2>
        ) : (
          <p>No matching data available</p>
        )}
      </Content>
    </Wrapper>
  );
};

export default ModalMenu;

// styled-components
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Content = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 22px;
  font-family: "Yeongdeok Haeparang";
`;

const SelectContainer = styled.div`
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 150px;
  background-color: white;
  cursor: pointer;
  option {
    font-size: 16px;
  }
`;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;

// AnimatedText 컴포넌트 업데이트
const AnimatedText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #636038;
  margin-top: 40px;
  letter-spacing: 2px;
  margin-bottom: 40px;
`;

const Blank = styled.span`
  width: 30px;
`;

// 애니메이션 키프레임 정의
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${bounceAnimation} 1.2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s; /* 각 글자에 시간차 적용 */
`;

const Bar = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-right: 1rem; */
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
`;

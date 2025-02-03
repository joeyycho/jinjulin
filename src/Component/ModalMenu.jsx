import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import DataCard from "./DataCard";
import DiceIcon from "./DiceIcon";

const ModalMenu = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [filter, setFilter] = useState(null);

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
        setFilter(null); // 필터 초기화
      }}
    >
      <Content onClick={(e) => e.stopPropagation()}>
        <RadioContainer>
          <label>
            <input
              type="radio"
              name="filter"
              value="lunch"
              checked={filter === "lunch"}
              onChange={handleChange}
            />{" "}
            점심
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="dinner"
              checked={filter === "dinner"}
              onChange={handleChange}
            />{" "}
            저녁
          </label>
        </RadioContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : !filter ? (
          <span>점심/저녁, 어떤 걸 추천해드릴까요?</span>
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
  span {
    font-size: 20px;
    font-weight: 400;
    color: #000000;
    font-family: "Yeongdeok Haeparang";
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Text = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 22px;
  font-family: "Yeongdeok Haeparang";
`;

const RadioContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-top: 5px;
  label {
    font-weight: 600;
    color: #000000bb;
  }

  input[type="radio"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 50%;
    outline: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    background-color: #70b8c6; /* 원하는 색상으로 변경 */
    border-color: #7fc3cc;
  }
`;

const Blank = styled.span`
  width: 30px;
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

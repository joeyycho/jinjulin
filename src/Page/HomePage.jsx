import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styled from "styled-components";
import Waves from "../Component/Waves";
import { Left, Right } from "../Component/Text";

const HomePage = () => {
  const handleButtonClick = () => {
    window.open("https://forms.gle/1Gwp7G9yJc1NCcPh8", "_blank");
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Page>
        <Waves />
        <Contents>
          <Left>
            진주를 잘 모르는 친구에게 진주에 대해 알려주고 싶은데, 어떻게
            알려주어야 하는지 모르겠어요.
          </Left>
          <Right>대학 때문에 진주로 이사를 와서 아무런 정보가 없어요.</Right>
          <Left>
            맛집을 찾고 싶은데 '진주 맛집'이라고 검색하면 광고가 너무 많아요.
          </Left>
          <Dots>
            <Dot />
            <Dot />
            <Dot />
          </Dots>
          <Text>이런 고민들을 해결하기 위해</Text>
          <img src="/image/Logo2.png" alt="Logo" />
          <Text>가 탄생했습니다.</Text>
          <Block>
            <Text>
              <span>- 이용 방법 -</span>
            </Text>
            <Text>
              <span>LIST</span>에서 맛집, 명소 등의 목록을 확인할 수 있어요.
            </Text>
            <Text>
              <span>지도</span>를 클릭하면 장소들의 위치를 볼 수 있어요. <br />{" "}
              동 별 조회도 가능하답니다 :)
            </Text>
            <Text>
              <span>게시판</span>에서 진주에 대한 이야기를 나눌 수 있어요.
            </Text>
            <Text>
              <span>조개 아이콘</span>에 숨겨진 특별한 기능을 사용해보세요!
            </Text>
            <Text>
              <span>𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼</span>
            </Text>{" "}
          </Block>
          <Text>아래 버튼을 눌러 진주의 명소를 추천해주세요 :)</Text>
          <Button onClick={handleButtonClick}>𓇼 ⋆.˚ 명소 추천하기 ⋆.˚ 𓆡</Button>
          <Text>친구들에게 링크를 공유하고 진주를 함께 즐겨보아요!</Text>
        </Contents>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 크기만큼 */
  background-color: #eae0d6;
`;

const HeaderWrapper = styled.div`
  background-color: #70b8c6;
`;

const Page = styled.div``;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  & img {
    width: 100%;
    margin: 20px;
  }
`;
const Text = styled.div`
  color: #636038;
  font-family: "Yeongdeok Haeparang";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  & span {
    color: #000;
  }
`;

const Button = styled.button`
  width: auto;
  height: 40px;
  margin: 20px;
  margin-bottom: 60px;
  background-color: #636038;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  font-family: "Yeongdeok Haeparang";
`;

const Block = styled.div`
  text-align: center;
  margin-top: 70px;
  margin-bottom: 70px;
  background-color: rgb(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 10px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: #636038;
  border-radius: 50%;
  margin: 10px;
`;

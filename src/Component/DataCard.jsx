import React from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';

const DataCard = ({ data }) => {
  // const { id, placeName, location, url, comment, picture } = data;

  const dummy = {
    id: 1,
    placeType: "식당",
    placeName: "명샤브",
    url: "https://naver.me/xgNSt8UT",
    location: "서울시 강남구 역삼동",
    comment: "혼밥하기 좋음. 저렴한 가격.",
    picture: 'https://placeimg.com'
  };

  return (
    <CardWrapper key={dummy.id} >
        <CardBody>
       <CardImage/>
        {/* {picture && <CardImage src={picture} alt={placeName} />} */}
        <Text>
        <Line1><Fine1>{dummy.placeName}</Fine1><a href={dummy.url} target="_blank" ><ExternalLink />
        </a></Line1>
        <Line><Fine>— Location: </Fine><Good>{dummy.location}</Good></Line>
        <Line><Fine>— Comment: </Fine><Good>{dummy.comment}</Good></Line>
        </Text>
      </CardBody>
    </CardWrapper>
  );
};
export default DataCard;

const CardWrapper = styled.div`
    border-bottom: 1.5px solid #19AC48;
    padding-bottom: 1rem;
    margin: 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    color: #19AC48;
    `;
const CardBody = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `;

    const  Text = styled.div`
    /* margin-left: 1rem;
    margin-right: 1rem; */
    width: 100%;
    font-size: 14px;
    margin-top: 1rem;
    /* margin-top: 0.5rem; */
    `;

const CardImage = styled.img`
width: 100%;
height: 200px;
border-radius: 5px;
background-color: #f5f5f5;
`;
const Line = styled.div`
    display: flex;
    height: 20px;
`;
const Line1 = styled.div`
    display: flex;
    height: 20px;
    margin-bottom: 20px;
`;
    
const Fine = styled.div`
    width: 100px;
    text-align: left;
    align-items: center;
    display: flex;
    height: 20px;
`;   
const Fine1 = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;
    width: 100%;
    /* margin-bottom: 20px; */
`;
const Good = styled.div`
        height: 20px;
`;

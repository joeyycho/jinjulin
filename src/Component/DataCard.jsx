import React from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';

const DataCard = ({ data }) => {  // data를 props로 받음

  return (
    <>
    {data.length > 0 ? (
    data.map((item, index) => (
    <CardWrapper key={index} >
        <CardBody>
       {/* <CardImage/> */}
        {item.picture && <CardImage src={item.picture} alt={item.placeName} />}
        <Text>
        <Line1><Fine1>{item.placeName}</Fine1><a href={item.url} target="_blank" rel="noreferrer"><ExternalLink />
        </a></Line1>
        <Line><Fine>— Location: </Fine><Good>{item.location}</Good></Line>
        <Line><Fine>— Comment: </Fine><Good>{item.comment}</Good></Line>
        </Text>
      </CardBody>
    </CardWrapper>
        ))
      ) : (
        <Text1>해당 유형의 데이터가 없습니다.</Text1>
      )}
    </>
  )}
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
  height: 100%;  // 높이를 100%로 설정하여 부모 요소에 맞추기
  border-radius: 5px;
  background-color: #f5f5f5;
  object-fit: cover;  // 이미지 비율 유지하면서 부모 크기에 맞게 자르기
  aspect-ratio: 1.5;  // 원하는 비율을 설정 (여기선 1.5:1 비율)
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
display: flex;
align-items: center;
`;

const Text1 = styled.div`
    text-align: center;
    font-size: 14px;
    color: #19AC48;
`;
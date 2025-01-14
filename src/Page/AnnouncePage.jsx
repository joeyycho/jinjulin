import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Component/Header';
import styled from 'styled-components';
import Footer from '../Component/Footer';

const AnnouncePage = () => {
const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/Data/notice.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);
        const navigate = useNavigate();

        const handleClick = (id) => {
          navigate(`/notice/${id}`);
        };

        return (
          <Wrapper>
            <Header />
            <Page>
            <Title>NOTICE</Title>
            <List>
              {Data.map((announcement) => (
                <ListDetail key={announcement.id} onClick={() => handleClick(announcement.id)}>
                  <p>{announcement.title}</p>
                  <p>{announcement.createdAt}</p>
                </ListDetail>
              ))}
            </List>
            </Page>
            <Footer />
          </Wrapper>
        );
      };

export default AnnouncePage

const Wrapper = styled.div`
  color: #19AC48;
  display: flex;
flex-direction: column;   /* 세로 방향으로 정렬 */
min-height: 100vh;        /* 최소 높이를 화면 크기만큼 */
  `;

const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  font-size: 20px; 
  text-align: center;
  font-weight: 300;
  border-bottom: 1px solid #19AC48;
  `;

  const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;    
  `;

  const ListDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #19AC48;
  /* height: 42px; */
  `;
  
const Page = styled.div`
padding-top: 63px;
  flex: 1;  /* 남은 공간을 채워주도록 설정 */
`;
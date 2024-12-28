import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Component/Header';
import styled from 'styled-components';


const AnnouncePage = () => {
  const dummyData = [
    { id: 1, title: 'First Announcement', createdAt: '2023-01-01', text: 'This is the first announcement.', author: 'Admin' },
    { id: 2, title: 'Second Announcement', createdAt: '2023-02-01', text: 'This is the second announcement.', author: 'Admin' },
    // Add more dummy data as needed
  ];
        const navigate = useNavigate();

        const handleClick = (id) => {
          navigate(`/notice/${id}`);
        };

        return (
          <Wrapper>
            <Header />
            <Title>NOTICE</Title>
            <List>
              {dummyData.map((announcement) => (
                <ListDetail key={announcement.id} onClick={() => handleClick(announcement.id)}>
                  <p>{announcement.title}</p>
                  <p>{announcement.createdAt}</p>
                </ListDetail>
              ))}
            </List>
          </Wrapper>
        );
      };

export default AnnouncePage

const Wrapper = styled.div`
  color: #19AC48;
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
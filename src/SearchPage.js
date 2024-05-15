// SearchPage.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const LogoImage = styled.img`
  width: 220px;
  margin: 0px auto 50px;
  display: block;
`;

const SearchPageDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  input[type="text"] {
    padding: 18px 7%;
    background-color: var(--gray5);
    border: 0px;
    margin: 0px;
    border-radius: 40px;
    width: 94%;
    font-size: 12pt;
  }
`;

const PopularSearches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84%;
  padding: 25px 8%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-top: 30px;
  color: var(--gray2);

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
  }

  li {
     padding: 4px 0px;
  }

  .indexNo {
    width: 30px;
    font-weight: bold;
    font-size: 10pt;
    display: inline-block;
    margin: 0px;
  }
`;

const SearchRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchColumn = styled.div`
  width: 45%; 
`;

const Button = styled.button`
  cursor: pointer;
  width: 40px;
  background: transparent;
`;

const Heading = styled.h3`
  width: 100%;
  text-align: left;
  margin: 0px;
  margin-bottom: 20px;
  font-size: 16pt;
`;

const LastUpdated = styled.span`
  font-size: 12px;
  color: var(--gray4);
  font-weight: normal;
  margin-left: 10px;
`;

function SearchPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [popularSearches, setPopularSearches] = useState([]);
  const [lastUpdatedTime, setLastUpdatedTime] = useState(new Date());

  useEffect(() => {
    fetchPopularSearches(); // 초기 데이터 가져오기
    const interval = setInterval(() => {
      fetchPopularSearches(); 
      updateLastUpdatedTime();
    }, 10 * 60 * 5); 

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 clearInterval
  }, []);

  const fetchPopularSearches = async () => {
    try {
      /*// Django 서버에 요청을 보내고 인기 검색어 데이터를 가져옴
      const response = await fetch('/api/popular-searches/');
      if (!response.ok) {
        throw new Error('Failed to fetch popular searches');
      }
      const data = await response.json();
      setPopularSearches(data); // 인기 검색어 데이터를 상태에 저장*/

      // *------- 실제 서버에서 데이터를 가져오는 대신 테스트 데이터를 사용
      const testData = ['치즈', '마라탕', '치킨', '햄버거', '피자', '곱창', '김치찜', '샐러드', '파스타', '짜장면'];
      for (let i = testData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [testData[i], testData[j]] = [testData[j], testData[i]];
      }
      setPopularSearches(testData);
      // 여기까지 테스트 코드 -------*

      // 업데이트 기준 시각 표시
      updateLastUpdatedTime();
    } catch (error) {
      console.error(error);
    }
  };

  const updateLastUpdatedTime = () => {
    setLastUpdatedTime(new Date());
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Django 서버 요청
      const response = await fetch(`/api/search/?search_term=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setLoading(false);
      navigate('/results');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div class="container">
    <SearchPageDiv>
      <LogoImage src="./img/logo.png" />
      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit"><img src="./img/5.png"/></Button>
      </SearchForm>
      {loading && <p>Loading...</p>}
      <PopularSearches>
        <Heading>인기 검색어 <LastUpdated>{lastUpdatedTime.toLocaleTimeString()}</LastUpdated></Heading>
        <SearchRow>
          <SearchColumn>
            <ul>
              {popularSearches.slice(0, 5).map((search, index) => (
              <Fade direction="bottom-top" delay={index * 100} key={index}>
                <li><p class="indexNo">{index+1}</p>{search}</li>
              </Fade>
            ))}
            </ul>
          </SearchColumn>
          <SearchColumn>
            <ul>
              {popularSearches.slice(5).map((search, index) => (
                  <Fade direction="bottom-top" delay={index * 100} key={index}>
                    <li><p class="indexNo">{index+6}</p>{search}</li>
                  </Fade>
              ))}
            </ul>
          </SearchColumn>
        </SearchRow>
      </PopularSearches>
    </SearchPageDiv>
    </div>
  );
}

export default SearchPage;

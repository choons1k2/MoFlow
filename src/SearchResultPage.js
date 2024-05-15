// SearchResultPage.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';

const SearchResultPageDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function SearchResultPage() {
  const [searchResult, setSearchResult] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 여기서는 간단히 검색 결과를 받아오는 로직을 시뮬레이션합니다.
    // 실제로는 백엔드에서 받아온 결과를 setSearchResult로 설정해야 합니다.
    setTimeout(() => {
      setSearchResult("Search results will be displayed here.");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SearchResultPageDiv>
      <h2>Search Result Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{searchResult}</p>
      )}
    </SearchResultPageDiv>
  );
}

export default SearchResultPage;

// MainLogoPage.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AttentionSeeker } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const LogoPageDiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function MainLogoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 2000);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <LogoPageDiv>
      <AttentionSeeker effect="pulse">
        <img alt='logo_start' src='/img/logo.png' width={260}/>
      </AttentionSeeker>
    </LogoPageDiv>
  );
}

export default MainLogoPage;

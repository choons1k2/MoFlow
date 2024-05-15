// LoginPage.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OnboardingPopup from './OnboardingPopup';
import { useNavigate } from 'react-router-dom';
import NaverLogin from './NaverLogin';



const LoginPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// LoginForm 컴포넌트 정의
const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  input[type="text"],
  input[type="password"] {
    padding: 18px 10%;
    background-color: var(--gray5);
    border: 0px;
    margin: 0px 0px 5px;
    border-radius: 40px;
    width: 80%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

function LoginPage() {
  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // 페이지가 처음 렌더링될 때 팝업 열기
    setShowOnboarding(true);
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      // 로그인 성공 시 팝업 열지 않음
      setShowOnboarding(false); // 로그인 성공 시 팝업을 닫음
      navigate('/search');
    } else {
      setError('Invalid username or password');
    }
  };




  const handlePopupClose = () => {
    setShowOnboarding(false);
  };

  return (
    <div class="container">
    <LoginPageDiv>
      {/* 팝업 컴포넌트를 렌더링 */}
      {showOnboarding && <OnboardingPopup onClose={handlePopupClose} />}
      <LoginForm onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="이메일"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="buttonStyle1">로그인</button>
        <button class="buttonStyle3">카카오로 시작하기</button>
        <NaverLogin />
        
      </LoginForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
    </LoginPageDiv>
    </div>
  );
}

export default LoginPage;

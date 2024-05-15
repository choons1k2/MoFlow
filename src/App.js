// App.js
import  React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Switch 대신에 Routes를 import합니다.
import MainLogoPage from './MainLogoPage';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';
import SearchResultPage from './SearchResultPage';
import SignupPage from './SignupPage'; // *0514추가*

import NaverLogin from './NaverLogin';
import RedirectPage from './RedirectPage';

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");

  :root {
    --gray1: #1B1D1F;
    --gray2: #454C53;
    --gray3: #72787F;
    --gray4: #9EA4AA;
    --gray5: #F7F6F9;
    --purple: #854BFF;
    --white: #fff;
  }

  body, input, button {
    margin: 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
    letter-spacing: -0.2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--gray2);
  }

  img {
    max-width: 100%;
  }

  /* container */
  .container {
    background-color: white;
    color: var(--gray1);
    width: 80%;
    max-width: 400px;
    margin: auto;
  }

  /* button */
  button {
    width: 100%;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s;
    font-size: 11pt;
  }

  button:hover {
    opacity: 0.8;
  }

  .buttonStyle1, .buttonStyle2, .buttonStyle3, .buttonStyle4, .buttonStyle5  {
    background-color: var(--purple); 
    color: white;
    padding: 15px 20px;
  }

  .buttonStyle2 {
    background-color: white;
    border: 2px solid var(--purple); 
    font-weight: bold;
    color: var(--gray1);
  }

  .buttonStyle3 {
    background-color: #FEE500;
    font-weight: bold;
    color: var(--gray1);
  }

  .buttonStyle5 {
    background-color: #03C75A;
    font-weight: bold;
    color: var(--gray1);
  }

  .buttonStyle4 {
    background: transparent;
    color: var(--gray3);
    font-size: 9pt;
  }
`;


function App() {

  
  return (
   
    <Router>
      <GlobalStyle />
      <Routes> {/* Routes 컴포넌트로 감싸주고 */}
        <Route exact path="/" element={<MainLogoPage />} />
        <Route exact path="" element={<MainLogoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<SearchResultPage />} />
        
        {/*소셜 로그인 */}
        <Route path="/naverLogin" element={<NaverLogin />} />
        <Route path="/callback/naverLogin" element={<RedirectPage />} />
       

        <Route path="/signup" element={<SignupPage />} /> {/*0514추가*/}
      </Routes>
    </Router>
    
  );
}

export default App;

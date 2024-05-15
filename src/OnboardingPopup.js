import React, { useState } from 'react';
import styled from 'styled-components';
import { AttentionSeeker } from 'react-awesome-reveal';


import { Link } from 'react-router-dom'; // *0514추가*

const PopupDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 999;
  line-height: 170%;
`;

const PopupContent = styled.div`
  width: 400px;
  height: 520px;
  max-width: 100%;
  background-color: white;
  padding: 60px 50px 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) { /* mobile */
    width: 80vw; 
    height: 100vh; 
    padding: 0px 10vw;
  }
`;

const SlideImage = styled.img`
  width: 150px;
  margin: 40px auto;
  display: block;
`;

const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
`;

const DotNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 0px;
  right: 0px;
  margin: auto;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#854BFF' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
`;


function OnboardingPopup({ onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const closePopup = () => {
    onClose(); // onClose 함수를 호출하여 부모 컴포넌트에 팝업이 닫혔음을 알림
  };

  return (
    <PopupDiv show={true}>
      <AttentionSeeker effect="rubberBand">
      <PopupContent>
        {/* 도트 네비게이션 */}
        <DotNavigation>
          <Dot active={activeSlide === 0} onClick={() => setActiveSlide(0)} />
          <Dot active={activeSlide === 1} onClick={() => setActiveSlide(1)} />
          <Dot active={activeSlide === 2} onClick={() => setActiveSlide(2)} />
        </DotNavigation>
        {/* 슬라이드 내용 */}
        <div style={{ display: activeSlide === 0 ? 'block' : 'none' }}>
          {/* Slide 1 content */}
          <h1>모플로에 오신 것을<br /><br />환영합니다!</h1>
          <p>시간의 흐름에 따라 정보를 탐색해보세요. <br />
          AI가 포털 사이트의 검색 결과를 월별로 요약해,<br />
          변화를 쉽게 파악할 수 있습니다.</p>
          <SlideImage src="./img/1.png" />
          <Button onClick={nextSlide} className="buttonStyle1">다음</Button>
          <button onClick={closePopup} class="buttonStyle4">건너뛰기</button>
        </div>
        {/* 슬라이드 내용 */}
        <div style={{ display: activeSlide === 1 ? 'block' : 'none' }}>
          {/* Slide 2 content */}
          <h1>정보의 흐름, <br/><br />AI가 한눈에 요약</h1>
          <p>검색어를 입력하면, <br/>
          AI가 해당 주제에 대한 월별 요약 정보와 <br/> 
          트렌드 지수 그래프를 제공합니다.</p>
          <SlideImage src="./img/2.png" />
          <Button onClick={nextSlide} className="buttonStyle1">다음</Button>
          <button onClick={closePopup} class="buttonStyle4">건너뛰기</button>
        </div>
        {/* 슬라이드 내용 */}
        <div style={{ display: activeSlide === 2 ? 'block' : 'none' }}>
          {/* Slide 3 content */}
          <h1>지금 시작하세요!</h1>
          <p>모플로와 함께, <br/>
          시간을 넘나드는 여정을 떠나 보세요.</p>
          <br /><SlideImage src="./img/logo.png" /><br />
          {/* [요청] 여기 버튼 각각 링크 걸어주세요 */}
          <Link to="/signup"><Button className="buttonStyle2">회원가입</Button></Link> {/*0514추가*/}
          <Button className="buttonStyle3">카카오로 시작하기</Button>
          
          {/*네이버 로그인 컴포넌트 */}
          {/*<NaverLogin /> */}
          <button onClick={closePopup} class="buttonStyle4">이미 계정이 있어요</button>
        </div>
      </PopupContent>
      </AttentionSeeker>
    </PopupDiv>
  );
}

export default OnboardingPopup;
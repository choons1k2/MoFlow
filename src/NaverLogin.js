import React, { useEffect } from 'react';

const NaverLogin = ({ setGetToken, setUserInfo }) => {
    const { naver } = window;
    const NAVER_CLIENT_ID =  "ct29CaeCB196LkH1VCpU";
    const NAVER_CALLBACK_URL = "http://localhost:3000/callback/naverLogin";

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: 58 },
            callbackHandle: true,
        });
        naverLogin.init();
       
        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                const userid = naverLogin.user.getEmail();
                const username = naverLogin.user.getName();
                
                 // 유저 정보를 객체로 생성
        const naverUser = {
            id: userid,
            name: username
          };
  
          // localStorage에 naverUser를 저장
          localStorage.setItem('naverUser', JSON.stringify(naverUser));
            }
        });
    };

    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken();
    };

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0];
        localStorage.setItem('access_token', token);
        setGetToken(token);
    };

    useEffect(() => {
        initializeNaverLogin();
        userAccessToken();
    }, []);

    const handleNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: 58 },
            callbackHandle: true,
        });
        naverLogin.init();
    };

    return (
        <div id="naverIdLogin">
        <button className="buttonStyle5" onClick={handleNaverLogin}>네이버로 시작하기</button>
        
    </div>
    );
};

export default NaverLogin;
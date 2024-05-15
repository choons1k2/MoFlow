import React from 'react';

const RedirectPage = () => {
  // localStorage에서 아이디와 이름 가져오기
  const naverUser = JSON.parse(localStorage.getItem('naverUser'));
  const { id, name } = naverUser || {};
  const token = localStorage.getItem('com.naver.nid.oauth.state_token')
  return (
    <div>

        naverLogin redirectpage.........
    <h1>token: infomation.......: {token}</h1>
      {id && <p>ID: {id}</p>}
      {name && <p>Name: {name}</p>}
    </div>
  );
};

export default RedirectPage;

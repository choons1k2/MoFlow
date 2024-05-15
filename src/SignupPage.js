import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton'; 

const SignupPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignupForm = styled.form`
  width: 100%;
  max-width: 400px; /* 최대 너비 설정 */
`;

const Input = styled.input`
  height: 14px;
  font-size: 12pt;
  padding: 20px 5%;
  margin: 10px 0px 0px;
  width: 90%;
  border-radius: 10px;
  border: 2px solid var(--gray5);

  &:focus {
    outline: none;
    border: 2px solid var(--purple);
  }
`;

const Button = styled.button`
  margin: 10px 0px 0px;
  font-weight: bold;
  padding: 15px 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? 'var(--gray4)' : 'var(--purple)')};
  border: ${({ disabled }) => (disabled ? '2px solid var(--gray4)' : '2px solid var(--purple)')};
  color: ${({ disabled }) => (disabled ? '#fff' : '#fff')};
`;

const ErrorMessage = styled.p`
  font-size: 10pt;
  color: red;
`;

const StyledLabel = styled.label`
  color: var(--gray2);
  font-size: 11pt;
  position: relative;
  left: 5%;
`;

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    //name: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    id: '',
    //name: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });
  const [isFormValid, setIsFormValid] = useState(false); // Initially disable the button

  useEffect(() => {
    // Update the disabled state of the button whenever there's a change in the form data or error messages
    setIsFormValid(Object.values(errorMessages).every((message) => message === '') && Object.values(formData).every((value) => value !== ''));
  }, [errorMessages, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    switch (fieldName) {
      case 'id':
        if (!value || !/^[a-zA-z0-9]{4,12}$/.test(value)) {
          errorMessage = '4-12자의 영문 소문자, 숫자만 사용할 수 있습니다.';
        }
        break;
      //case 'name':
      // if (value.length < 2) {
      //    errorMessage = '닉네임은 2글자 이상 입력해주세요.';
      //  }
      //  break;
      case 'password':
        if (!/(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(value)) {
          errorMessage = '숫자, 영문자, 특수문자를 조합하여 8자 이상 입력해주세요.';
        }
        break;
      case 'passwordConfirm':
        if (formData.password !== value) {
          errorMessage = '비밀번호가 일치하지 않습니다.';
        }
        break;
      case 'email':
        if (!/^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/.test(value)) {
          errorMessage = '올바른 이메일 형식을 입력해주세요.';
        }
        break;
      default:
        break;
    }
    setErrorMessages({ ...errorMessages, [fieldName]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // 회원가입 처리 로직 구현
      console.log('회원가입 정보:', formData);
      navigate('/login'); // 회원가입 성공 시 로그인 페이지로 이동
    }
  };

  return (
    <div class="container">
    <SignupPageDiv>
      <BackButton onClick={() => navigate('/')} />
      <h2>회원가입</h2>
      <SignupForm onSubmit={handleSubmit}>
        <div className="form-el">
          <StyledLabel htmlFor="id">아이디</StyledLabel> <br />
          <Input id="id" name="id" placeholder="아이디" value={formData.id} onChange={handleChange} />
          <ErrorMessage>{errorMessages.id}</ErrorMessage>
        </div>
        <div className="form-el">
          <StyledLabel htmlFor="password">비밀번호</StyledLabel> <br />
          <Input id="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} type="password" />
          <ErrorMessage>{errorMessages.password}</ErrorMessage>
        </div>
        <div className="form-el">
          <StyledLabel htmlFor="passwordConfirm">비밀번호 확인</StyledLabel> <br />
          <Input id="passwordConfirm" name="passwordConfirm" placeholder="비밀번호 확인" value={formData.passwordConfirm} onChange={handleChange} type="password" />
          <ErrorMessage>{errorMessages.passwordConfirm}</ErrorMessage>
        </div>
        <div className="form-el">
          <StyledLabel htmlFor="email">이메일</StyledLabel> <br />
          <Input id="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} type="email" />
          <ErrorMessage>{errorMessages.email}</ErrorMessage>
        </div>
        <Button type="submit" disabled={!isFormValid}>회원가입</Button>
      </SignupForm>
    </SignupPageDiv>
    </div>
  );
};

export default SignupPage;

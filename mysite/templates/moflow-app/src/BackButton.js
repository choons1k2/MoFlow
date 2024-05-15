import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi'; 

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

const BackButton = ({ onClick }) => (
  <BackButtonWrapper onClick={onClick}>
    <FiArrowLeft size={24} color="#9EA4AA" />
  </BackButtonWrapper>
);

export default BackButton;

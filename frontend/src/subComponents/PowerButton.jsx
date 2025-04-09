import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import powerBtnImage from '/yinyang.png'; // Update the path to your PNG image

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #FCF6F4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 3rem; /* Adjust the width to your preference */
  height: 3rem; /* Adjust the height to your preference */

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  background-image: url(${powerBtnImage});
  background-size: 100%; /* Adjust the size to fit within the button */
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home")
  };

  return (
      <Power onClick={handleButtonClick} />
  );
}
  


export default PowerButton;

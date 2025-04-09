// LandingPage.js
import  { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PiKeyholeFill } from "react-icons/pi";

const StyledBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff url('heart.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px;
  mix-blend-mode: screen;
  z-index: 0;
`;

const EnterButton = styled.button`
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  background-size: cover;
  color: #fff;
  width: 150rem;
  height: 150rem;
  text-align: center;
  line-height: 80px;
  font-size: 24px;
  text-decoration: none;
  border-radius: 15px;
  transition: opacity 0.3s ease, pointer-events 0s;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300vh;
  color: #fff;
`;

const LargeIcon = styled(PiKeyholeFill)`
  width: 50rem; /* Adjust the width as needed */
  height: 50rem; /* Adjust the height as needed */

`;

const EnterText = styled.h1`
  margin-left: 10px; /* Adjust the margin as needed */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 25rem
`;
const LandingPage = () => {
  const [backgroundSize, setBackgroundSize] = useState(100);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const bottomReached = windowHeight + scrollTop >= documentHeight;

      if (bottomReached) {
        setShowEnterButton(true);
      } else {
        setShowEnterButton(false);
        setBackgroundSize(100 + scrollTop * 2);
      }
    };

    // Show the Enter button after 6 seconds
    const showEnterButtonTimeout = setTimeout(() => {
      setShowEnterButton(true);
    }, 6000);

    window.addEventListener("scroll", handleScroll);

    // Ensure the page always reloads at the top
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(showEnterButtonTimeout);
    };
  }, []);

  const handleEnterClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <StyledBanner>
        <EnterButton onClick={handleEnterClick} visible={showEnterButton}>
          <LargeIcon />
          <EnterText>Insert Key</EnterText>
        </EnterButton>
        <StyledBackground style={{ backgroundSize: `${backgroundSize}px` }} />
      </StyledBanner>
      <LandingPageContainer></LandingPageContainer>
    </div>
  );
};

export default LandingPage;

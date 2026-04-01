import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "../components/AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  padding: 2rem;
`;

const TopLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;
`;

const RightLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 2;
`;

const LeftLink = styled(NavLink)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 48%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 2;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const BottomLink = styled(NavLink)`
  color: ${(props) => {
    if (!props.$click) return props.theme.text;
    if (props.$darkOnClick) return "#000";
    return props.theme.body;
  }};
  text-decoration: none;
  z-index: 2;
`;

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.$click ? "85%" : "50%")};
  left: ${(props) => (props.$click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.$click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.$click ? "50%" : "0%")};
  height: ${(props) => (props.$click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export default function BrandLandingPage() {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      <DarkDiv $click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center $click={click} onClick={() => setClick(!click)}>
          <YinYang width={click ? 120 : 200} height={click ? 120 : 200} fill="currentColor" />
          <span>enter archive</span>
        </Center>

        <TopLink to="/overview">
          <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
            Overview
          </motion.h2>
        </TopLink>

        <RightLink to="/brand">
          <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
            Brand
          </motion.h2>
        </RightLink>

        <LeftLink to="/ips" $click={click}>
          <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
            IP Library
          </motion.h2>
        </LeftLink>

<BottomBar>
  <BottomLink to="/characters" $click={click}>
    <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
      Characters
    </motion.h2>
  </BottomLink>

  <BottomLink to="/lore" $click={click}>
    <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
      Lore
    </motion.h2>
  </BottomLink>

  <BottomLink to="/projects" $click={click} $darkOnClick>
    <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
      Projects
    </motion.h2>
  </BottomLink>

  <BottomLink to="/assets" $click={click} $darkOnClick>
    <motion.h2 whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
      Assets
    </motion.h2>
  </BottomLink>
</BottomBar>
      </Container>
    </MainContainer>
  );
}
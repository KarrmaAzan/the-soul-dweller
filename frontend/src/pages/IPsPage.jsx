import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { YinYang } from "../components/AllSvgs";
import BigTitle from "../subComponents/BigTitlte";
import { IPData } from "../data/IPData";



const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(8rem + 10vw);
  height: 44vh;
  display: flex;
  gap: 1.5rem;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const Card = styled(NavLink)`
  list-style: none;
  width: 320px;
  min-height: 300px;
  padding: 1.25rem;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.04);
  }

  h3 {
    margin-bottom: 0.4rem;
  }

  small {
    opacity: 0.7;
  }

  p {
    line-height: 1.6;
    margin: 1rem 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    border: 1px solid ${(props) => props.theme.text};
    padding: 0.2rem 0.5rem;
    font-size: 0.75rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const IPsPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }
      if (yinyang.current) {
        yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
      }
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

     <Main ref={ref} variants={container} initial="hidden" animate="show">
  {IPData.map((item) => (
    <Card key={item.id} to={item.route}>
      <div style={{ display: "block" }}>
        <h3>{item.title}</h3>
        <small>{item.category}</small>
      </div>

      <p>{item.description}</p>

   <div className="tags">
  {item.tags.map((tag) => (
    <span className="tag" key={tag}>
      {tag}
    </span>
  ))}
</div>
    </Card>
  ))}
</Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text="IP LIBRARY" top="10%" right="12%" />
      </Box>
    </ThemeProvider>
  );
};

export default IPsPage;
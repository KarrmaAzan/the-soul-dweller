import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 320px) {
    bottom: -7rem; /* Adjust the bottom value as needed */
    left: 1rem; /* Add this line to move it to the left */
    
    & > *:not(:last-child) {
      margin: 0.1rem 0; /* Adjust the margin for smaller gap */
    }
  }
  @media screen and (min-width: 321px) and (max-width: 425px) {
    
    bottom: -7rem; /* Adjust the bottom value as needed */
    left: 1rem; /* Add this line to move it to the left */
    
    & > *:not(:last-child) {
      margin: 0.1rem 0; /* Adjust the margin for smaller gap */
    }
 
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    bottom: -7rem; /* Adjust the bottom value as needed */
    left: 1rem; /* Add this line to move it to the left */
    
    & > *:not(:last-child) {
      margin: 0.1rem 0; /* Adjust the margin for smaller gap */
    }
  
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
    bottom: -7rem; /* Adjust the bottom value as needed */
    left: 1rem; /* Add this line to move it to the left */
    
    & > *:not(:last-child) {
      margin: 0.1rem 0; /* Adjust the margin for smaller gap */
    }
  
    
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/TheKarmicCoder"}
        >
          <FaGithub
            size={25}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://x.com/karrma28?s=21"}
        >
          <FaTwitter
            size={25}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://www.linkedin.com/in/jordan-a-golden?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          }
        >
          <FaLinkedin
            size={25}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://instagram.com/karrma_worldwide?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
          }
        >
          <FaInstagram
            size={25}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href={"http://www.youtube.com/@KarrmaAzan"}
        >
          <FaYoutube
            size={25}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;

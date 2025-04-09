
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';

import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';


const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 320px) {
   
    margin-top: 2.6rem;
  
  }

  @media screen and (min-width: 321px) and (max-width: 425px) {
    
    
    margin-top: 2.6rem;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
  
    margin-top: 2.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
   margin-top: -4rem;
    height: 140vh;
  
    
  }
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 1rem;
  width: 90vw;
  max-width: 30rem;
  height: auto;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media screen and (max-width: 320px) {
    width: 80vw;
    max-width: none;
    height: auto;
  }

  @media screen and (min-width: 321px) and (max-width: 425px) {
    width: 70vw;
    max-width: 20rem;
    height: auto;
  }

  @media screen and (min-width: 426px) and (max-width: 767px) {
    width: 70%;
    max-width: none;
    height: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
    max-width: none;
    height: auto;
  }

  padding: 1rem;
  margin: 1rem auto;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-top: -1rem;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 0.8vw);
  padding: 0.5rem;
  margin-bottom: 1rem; /* Added margin-bottom for spacing */

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 1rem;
    margin-bottom: 0.5rem; /* Adjusted margin for spacing */
  }

  @media screen and (min-width: 375px) and (max-width: 425px) {
    font-size: calc(0.6em + 0.6vw); /* Adjust font size for better fit */
    margin-bottom: -0.5rem; /* Adjusted margin-bottom for spacing */
    width: 80%; /* Adjusted width for better fit */
    margin-left: auto; /* Centered the description by removing margin-left */
    margin-right: auto; /* Centered the description by removing margin-right */

    strong {
      margin-bottom: 0.5rem; /* Adjusted margin for spacing */
      text-transform: uppercase;
    }

    ul,
    p {
      margin-left: 0; /* Removed margin-left for better alignment */
      margin-bottom: 0.5rem; /* Adjusted margin for spacing */
      margin-top: -0.5rem; /* Adjusted margin for spacing */
    }
  }

  @media screen and (max-width: 320px) {
    font-size: calc(0.6em + 0.6vw); /* Adjust font size for better fit */
    margin-bottom: -1.5rem; /* Adjusted margin-bottom for spacing */
    width: 80%; /* Adjusted width for better fit */
    margin-left: auto; /* Centered the description by removing margin-left */
    margin-right: auto; /* Centered the description by removing margin-right */
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 1rem;
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />
        <Main>
          <Title>
            <Design width={40} height={40} /> Graphic Designer
          </Title>
          <Description>
            I love to create design clean and concisely. I take pride in my work and bring both ends of the table when it comes to the development process.
          </Description>
          <Description>
            <strong>I love to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Graphics</li>
              <li>Video Editing</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
              <li>Adobe Creative Cloud</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> FullStack Developer
          </Title>
          <Description>
            I value the beauty in life and use that to inspire my development in satisfying my clients. I enjoy helping to bring Dreams to Reality.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Nextjs Redux, Sass, Bootstrap, Tailwind, Firebase, Threejs, GSAP, Express, MongoDB, Nodejs & more.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              VScode, Github, Codepen, Youtube etc.
            </p>
          </Description>
        </Main>
      
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

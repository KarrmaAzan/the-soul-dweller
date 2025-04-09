
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/butterfly.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Butterfly = styled.div`
position: absolute;
top: 5%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  @media (max-width: 320px) {
    bottom: -1rem; /* Adjust the bottom value as needed */
    left: 4rem; /* Add this line to move it to the left */
    top: 8.5rem;
    
    & > *:not(:last-child) {
      margin: 0.1rem 0; /* Adjust the margin for smaller gap */
    }
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Butterfly>
            <img src={astronaut} alt="Butterfly" />
        </Butterfly>    
        <Main>
        I'm a Fullstack Developer that loves to create simple yet beautiful websites with great user experience.
<br /> <br/>
I'm interested in the whole Fullstack process and Like trying to incorporate anime into my style and designs while building great projects. I'm an independent freelancer, . I love to write blogs and read books.
<br/> <br/>
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%"  />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage

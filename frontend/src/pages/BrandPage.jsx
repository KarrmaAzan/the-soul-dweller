import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "../components/Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import butterfly from "../assets/Images/butterfly.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`;

const Butterfly = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: min(52rem, 70vw);
  min-height: 60vh;
  z-index: 3;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  font-size: calc(0.65rem + 0.8vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(4rem + 4vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  h2 {
    margin: 0;
    font-size: calc(1rem + 1vw);
  }

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 8rem auto 3rem auto;
    width: 88vw;
  }
`;

const BrandPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Butterfly>
          <img src={butterfly} alt="Butterfly sigil" />
        </Butterfly>

        <Main>
          <h2>The Soul Dweller</h2>

          <p>
            The Soul Dweller is a creative brand house centered on original
            intellectual property, symbolic storytelling, visual identity, and
            digital worldbuilding.
          </p>

          <p>
            Its flagship universe is <strong>Soul Dweller</strong>—a long-form
            narrative property supported by characters, canon, spiritual systems,
            archives, and cross-medium expansion.
          </p>

          <p>
            This site is not a portfolio. It is the operational archive for the
            brand: a place to organize universes, projects, lore, assets, and
            future releases under one controlled system.
          </p>

          <p>
            The mission is to build a lasting body of work that can scale across
            manga, applications, design, products, media, and culture.
          </p>
        </Main>

        <BigTitle text="BRAND" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default BrandPage;
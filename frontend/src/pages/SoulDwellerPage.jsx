import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../components/Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  padding: 8rem 4rem 4rem;
  position: relative;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 6rem auto 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  backdrop-filter: blur(4px);

  h2, h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  border: 1px solid ${(props) => props.theme.text};
  padding: 0.35rem 0.7rem;
  font-size: 0.8rem;
`;

const SoulDwellerPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <BigTitle text="SOUL DWELLER" top="8%" right="5%" />

        <Wrapper>
          <Panel>
            <h2>Flagship Intellectual Property</h2>
            <p>
              Soul Dweller is the central narrative universe of the brand. It
              combines spiritual mythology, symbolic storytelling, emotional
              transformation, worldbuilding, and layered character arcs into a
              long-form IP designed for cultural scale.
            </p>
            <p>
              The property is structured to expand across manga, lore archives,
              visual systems, product design, apps, and future media extensions.
            </p>
            <p>
              This page serves as the master overview of the IP itself before
              breaking into deeper sections like characters, canon, factions,
              systems, and timeline.
            </p>
          </Panel>

          <Panel>
            <h3>Status</h3>
            <p>Active Development</p>

            <h3>Core Type</h3>
            <p>Story Universe / Franchise IP</p>

            <h3>Focus Areas</h3>
            <TagWrap>
              <Tag>Manga</Tag>
              <Tag>Canon</Tag>
              <Tag>Lore</Tag>
              <Tag>Characters</Tag>
              <Tag>Worldbuilding</Tag>
              <Tag>Brand Expansion</Tag>
            </TagWrap>
          </Panel>
        </Wrapper>
      </Box>
    </ThemeProvider>
  );
};

export default SoulDwellerPage;
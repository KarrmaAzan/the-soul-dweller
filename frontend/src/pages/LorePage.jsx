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

const Grid = styled.div`
  max-width: 1200px;
  margin: 6rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  backdrop-filter: blur(4px);

  h3 {
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.6;
  }
`;

const LorePage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <BigTitle text="LORE" top="8%" right="5%" />

        <Grid>
          <Card>
            <h3>Cosmology</h3>
            <p>
              The metaphysical structure of the world, including realms,
              spiritual thresholds, symbolic geography, and the laws governing
              existence.
            </p>
          </Card>

          <Card>
            <h3>Canon</h3>
            <p>
              The preserved truth of the narrative universe: what is official,
              what is foundational, and what anchors the long-term story.
            </p>
          </Card>

          <Card>
            <h3>Factions</h3>
            <p>
              The governing powers, hidden organizations, bloodlines, military
              groups, and spiritual orders that shape the world conflict.
            </p>
          </Card>

          <Card>
            <h3>Systems</h3>
            <p>
              The internal mechanics of essence, resonance, alchemy,
              transformation, spiritual states, and symbolic inheritance.
            </p>
          </Card>

          <Card>
            <h3>Timeline</h3>
            <p>
              Major historical anchors, ancient events, betrayals, wars,
              prophecies, and the sequence of truths behind the present story.
            </p>
          </Card>

          <Card>
            <h3>Artifacts</h3>
            <p>
              Sacred items, books, marks, relics, and objects that hold power,
              memory, identity, or access to deeper truths.
            </p>
          </Card>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default LorePage;
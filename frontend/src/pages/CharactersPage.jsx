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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const CharacterCard = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  min-height: 240px;
  backdrop-filter: blur(4px);

  h3 {
    margin-bottom: 0.5rem;
  }

  small {
    display: block;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  p {
    line-height: 1.6;
  }
`;

const CharactersPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <BigTitle text="CHARACTERS" top="8%" right="5%" />

        <Grid>
          <CharacterCard>
            <h3>Karrma</h3>
            <small>Central Protagonist</small>
            <p>
              The core figure of the Soul Dweller narrative, carrying the
              emotional, symbolic, and spiritual weight of the story.
            </p>
          </CharacterCard>

          <CharacterCard>
            <h3>Michi</h3>
            <small>Major Character</small>
            <p>
              A mirrored and deeply significant figure whose presence alters
              Karrma’s path and deepens the story’s emotional architecture.
            </p>
          </CharacterCard>

          <CharacterCard>
            <h3>Nisha</h3>
            <small>Critical Narrative Character</small>
            <p>
              A deeply tied figure in Karrma’s history, betrayal, pain, memory,
              and transformation.
            </p>
          </CharacterCard>

          <CharacterCard>
            <h3>Nidus</h3>
            <small>Core Character</small>
            <p>
              A character bound to deeper truths, covenant, and key transitions
              across the story’s spiritual layers.
            </p>
          </CharacterCard>

          <CharacterCard>
            <h3>Nuri</h3>
            <small>Symbolic Character</small>
            <p>
              A central emotional and spiritual thread tied to rebirth, love,
              and generational meaning.
            </p>
          </CharacterCard>

          <CharacterCard>
            <h3>Exodus</h3>
            <small>Supporting Core</small>
            <p>
              Part of the larger architecture of the world and a key connection
              inside the broader cast and bloodline dynamics.
            </p>
          </CharacterCard>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CharactersPage;
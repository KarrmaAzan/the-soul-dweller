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
  padding: 8rem 4rem 4rem 4rem;
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  max-width: 1300px;
  margin: 6rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  backdrop-filter: blur(4px);
  background: rgba(255,255,255,0.02);

  h3 {
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const LargeCard = styled(Card)`
  grid-column: span 7;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const MediumCard = styled(Card)`
  grid-column: span 5;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const SmallCard = styled(Card)`
  grid-column: span 4;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const List = styled.ul`
  padding-left: 1rem;
  margin-top: 0.75rem;

  li {
    margin-bottom: 0.6rem;
    line-height: 1.5;
  }
`;

const DashboardPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <BigTitle text="DASHBOARD" top="8%" right="5%" />

        <Grid>
          <LargeCard>
            <h3>The Soul Dweller Ecosystem</h3>
            <p>
              This dashboard acts as the control center for The Soul Dweller
              brand. It tracks the flagship IP, active projects, narrative
              systems, visual assets, and long-term creative development.
            </p>
          </LargeCard>

          <MediumCard>
            <h3>Flagship IP</h3>
            <p>
              <strong>Soul Dweller</strong> is the core universe driving the
              brand’s mythology, canon, characters, symbolism, and expansion.
            </p>
          </MediumCard>

          <SmallCard>
            <h3>Active Areas</h3>
            <List>
              <li>Story Development</li>
              <li>Character Bible</li>
              <li>Lore Archive</li>
              <li>Visual Assets</li>
            </List>
          </SmallCard>

          <SmallCard>
            <h3>Current Priorities</h3>
            <List>
              <li>Refactor brand site architecture</li>
              <li>Organize IP pages and canon structure</li>
              <li>Prepare scalable asset library</li>
              <li>Build project release pipeline</li>
            </List>
          </SmallCard>

          <SmallCard>
            <h3>Brand Direction</h3>
            <p>
              A living archive for manga, design, apps, products, media, and
              culture under one structured system.
            </p>
          </SmallCard>

          <SmallCard>
            <h3>Expansion Paths</h3>
            <List>
              <li>Manga / Storytelling</li>
              <li>Applications</li>
              <li>Fashion / Label</li>
              <li>Digital Products</li>
            </List>
          </SmallCard>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardPage;
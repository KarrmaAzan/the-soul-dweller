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

const List = styled.div`
  max-width: 1100px;
  margin: 6rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
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
    line-height: 1.7;
  }
`;

const ProjectsPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <BigTitle text="PROJECTS" top="8%" right="5%" />

        <List>
          <ProjectCard>
            <h3>Soul Dweller</h3>
            <small>Flagship Narrative Project</small>
            <p>
              The main story universe and foundational IP for the entire brand
              ecosystem.
            </p>
          </ProjectCard>

          <ProjectCard>
            <h3>Soul Link</h3>
            <small>Application Concept</small>
            <p>
              A social platform concept centered on personas, authenticity,
              connection, and niche-based interaction.
            </p>
          </ProjectCard>

          <ProjectCard>
            <h3>SEVזN</h3>
            <small>Sublabel / Brand Extension</small>
            <p>
              A design and cultural branch intended to extend the visual and
              symbolic language of the brand.
            </p>
          </ProjectCard>

          <ProjectCard>
            <h3>Brand Archive System</h3>
            <small>Internal Infrastructure</small>
            <p>
              The evolving site and management structure used to organize IP,
              assets, canon, projects, and long-term creative operations.
            </p>
          </ProjectCard>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsPage;
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  padding: 6rem 2rem 3rem;
  color: ${(props) => props.theme.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  background: ${(props) => props.theme.body};
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.6;
`;

export default function BrandPage() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Grid>
          <Card>
            <Title>Core Brand</Title>
            <Text>
              The Soul Dweller functions as the central creative universe and brand house.
            </Text>
          </Card>

          <Card>
            <Title>Flagship IP</Title>
            <Text>
              Soul Dweller is the central narrative property, supported by lore, characters, systems, and visual worldbuilding.
            </Text>
          </Card>

          <Card>
            <Title>Subprojects</Title>
            <Text>
              Fashion, apps, books, media experiments, and future releases live under one structured ecosystem.
            </Text>
          </Card>

          <Card>
            <Title>Asset Control</Title>
            <Text>
              Organize logos, artwork, references, story documents, launch materials, and visual systems in one place.
            </Text>
          </Card>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
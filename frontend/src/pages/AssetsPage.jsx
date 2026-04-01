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

const AssetCard = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.5rem;
  min-height: 220px;
  backdrop-filter: blur(4px);

  h3 {
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.6;
  }
`;

const AssetsPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <BigTitle text="ASSETS" top="8%" right="5%" />

        <Grid>
          <AssetCard>
            <h3>Logos</h3>
            <p>
              Primary brand marks, alternate lockups, symbol systems, and icon
              variations for The Soul Dweller ecosystem.
            </p>
          </AssetCard>

          <AssetCard>
            <h3>Artwork</h3>
            <p>
              Character art, cover concepts, visual motifs, key illustrations,
              and worldbuilding references.
            </p>
          </AssetCard>

          <AssetCard>
            <h3>Mockups</h3>
            <p>
              Product visuals, brand presentation mockups, apparel concepts, and
              promotional renders.
            </p>
          </AssetCard>

          <AssetCard>
            <h3>Documents</h3>
            <p>
              Story files, canon references, pitch material, release sheets,
              internal planning docs, and brand notes.
            </p>
          </AssetCard>

          <AssetCard>
            <h3>Media</h3>
            <p>
              Video snippets, motion tests, sound references, trailers, and
              future rollout materials.
            </p>
          </AssetCard>

          <AssetCard>
            <h3>Vault</h3>
            <p>
              A structured repository for reusable creative assets across all IP,
              brand, and production branches.
            </p>
          </AssetCard>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AssetsPage;
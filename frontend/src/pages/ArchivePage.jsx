import { useEffect, useState } from "react";
import styled from "styled-components";
import img from "/cover.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitlte";

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 8rem 2rem 4rem;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.18;
    z-index: -1;
  }
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: 6rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  backdrop-filter: blur(4px);
  padding: 1.25rem;
  min-height: 220px;
`;

const Title = styled.h3`
  margin-bottom: 0.75rem;
`;

const Meta = styled.p`
  opacity: 0.7;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.6;
`;

const archiveEntries = [
  {
    title: "Codex of Elysium",
    type: "Canon Archive",
    summary: "Master lore archive containing the cosmology, factions, historical structure, and long-form canon notes."
  },
  {
    title: "Essence System",
    type: "Power System",
    summary: "Core breakdown of resonance, awareness, flow types, alchemical phases, and transmutation logic."
  },
  {
    title: "Character Vault",
    type: "Internal Reference",
    summary: "Profiles, relationships, factions, symbolic motifs, and visual references for core and supporting characters."
  },
  {
    title: "Brand Library",
    type: "Brand Archive",
    summary: "Mission, sublabels, naming systems, positioning, visual language, and ecosystem planning."
  },
  {
    title: "Project Releases",
    type: "Production Log",
    summary: "Track active builds, launches, prototypes, and progress across the larger Soul Dweller ecosystem."
  },
  {
    title: "Asset Vault",
    type: "Media Library",
    summary: "Logos, symbols, art direction, mockups, covers, references, and reusable visual assets."
  }
];

const ArchivePage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    const num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer>
      <LogoComponent />
      <PowerButton />
      <SocialIcons />
      <AnchorComponent number={numbers} />

      <BigTitle text="ARCHIVE" top="5rem" left="1rem" />

      <Grid>
        {archiveEntries.map((entry, index) => (
          <Card key={index}>
            <Title>{entry.title}</Title>
            <Meta>{entry.type}</Meta>
            <Text>{entry.summary}</Text>
          </Card>
        ))}
      </Grid>
    </MainContainer>
  );
};

export default ArchivePage;
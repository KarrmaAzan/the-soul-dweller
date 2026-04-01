import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: calc(10rem + 15vw);
  min-height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.$img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center center;
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Meta = styled.div`
  padding: 0.5rem 0;
  opacity: 0.75;
`;

const Summary = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Container = styled(motion.div)``;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5
    }
  }
};

const ArchiveCard = ({ entry }) => {
  const { title, type, summary, imgSrc } = entry;

  return (
    <Container variants={Item}>
      <Box>
        <Image $img={imgSrc} />
        <Title>{title}</Title>
        <Meta>{type}</Meta>
        <Summary>{summary}</Summary>
      </Box>
    </Container>
  );
};

export default ArchiveCard;
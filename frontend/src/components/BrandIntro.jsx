import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/karrma2.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  min-height: 55vh;
  display: flex;
  background:
    linear-gradient(to right, ${(props) => props.theme.body} 50%, ${(props) => props.theme.text} 50%) bottom,
    linear-gradient(to right, ${(props) => props.theme.body} 50%, ${(props) => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) {
    width: 90vw;
    flex-direction: column;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }

  .pic {
    position: absolute;
    bottom: -8rem;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1vw);
  color: ${(props) => props.theme.body};
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
    font-size: calc(0.55rem + 0.8vw);
    line-height: 1.6;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>The Soul Dweller</h1>
          <h3>Worlds, symbols, systems, and living IP.</h3>
          <p>
            A brand archive built to manage story universes, creative projects,
            visual assets, and long-term cultural expansion.
          </p>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Soul Dweller visual" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
import React from "react";
import styled from "styled-components";
import MyImage from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "75vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <LittleBox className="a">
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Aboumouslim.</h3>
          <h6>
            Front-end web developer, specializiing in mostly JS (ReactJS).
          </h6>
        </Text>
      </LittleBox>
      <LittleBox className="b">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img src={MyImage} alt="Aboumouslim Abderrahman" />
        </motion.div>
      </LittleBox>
    </Box>
  );
};

const Box = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  z-index: 1;

  border: 4px solid transparent;
  border-image: linear-gradient(45deg, #ff0, #f0f, #f00, #00f, #0f0);
  border-image-slice: 1;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 70vw;
    height: 90vh;

    flex-direction: column;
  }
`;

const LittleBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 100%;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(props) => props.theme.body};

  @media (max-width: 768px) {
    transform: scale(0.9);
    padding: 0.5rem;
  }

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

export default Introduction;

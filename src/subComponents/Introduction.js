import React from "react";
import styled from "styled-components";
import MyImage from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <LittleBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Aboumouslim.</h3>
          <h6>
            Front-end web developer, specializiing in mostly JS (ReactJS), but
            also write HTML, CSS and some other stuff.
          </h6>
        </Text>
      </LittleBox>
      <LittleBox>
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
  display: flex;
  height: 55vh;
  z-index: 1;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
`;

const LittleBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(props) => props.theme.body};

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

export default Introduction;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyImage from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Introduction = () => {
  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 320px)").matches) {
      setHeight("60vh");
    }
  }, []);

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <LittleBox className="a">
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Aboumouslim.</h3>
          <h6>
            Front-end web developer, specializiing in mostly JS and ReactJS.
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

  @media (max-width: 768px) {
    /* width: 70vw;
    height: 90vh; */

    flex-direction: column;
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const LittleBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;

    @media (max-width: 800px) {
      width: 60%;
    }
    @media (max-width: 640px) {
      width: 75%;
    }
    @media (max-width: 320px) {
      width: 90%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  padding: 0 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(props) => props.theme.body};

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
    @media (max-width: 768px) {
      font-size: calc(0.5rem + 1vw);
    }
  }

  @media (max-width: 640px) {
    font-size: calc(1rem + 1.5vw);
  }
  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

export default Introduction;

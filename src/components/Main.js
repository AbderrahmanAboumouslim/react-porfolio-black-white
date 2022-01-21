import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoC from "../subComponents/LogoC";
import { YinYang } from "../components/AllSvg";
import SocialMedia from "../subComponents/SocialMedia";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import Introduction from "../subComponents/Introduction";
import { motion } from "framer-motion";
const Main = () => {
  const [centerClick, setCenterClick] = useState(false);
  const handleClick = () => setCenterClick(!centerClick);

  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoC theme={centerClick ? "dark" : "light"} />
        <SocialMedia theme={centerClick ? "dark" : "light"} />
        <Contact target="_blank" href="mailto:abdourokinos@gmail.com">
          <motion.h5 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Message...
          </motion.h5>
        </Contact>
        <BLOG>
          <Link to="/blog">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Blog
            </motion.h2>
          </Link>
        </BLOG>
        <PROJECTS click={centerClick}>
          <Link to="/projects">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Projects
            </motion.h2>
          </Link>
        </PROJECTS>
        <BottomComponents>
          <ABOUT click={centerClick}>
            <Link to="/about">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                About
              </motion.h2>
            </Link>
          </ABOUT>
          <SKILLS>
            <Link to="/skills">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Skills
              </motion.h2>
            </Link>
          </SKILLS>
        </BottomComponents>
        <Center click={centerClick} onClick={() => handleClick()}>
          <YinYang
            width={centerClick ? 120 : 170}
            height={centerClick ? 120 : 170}
            fill="currentColor"
          />
          <span>
            <GiClick />
          </span>
        </Center>
        <DarkSide click={centerClick} />
      </Container>
      {centerClick ? (
        <Introduction
          theme={centerClick ? "dark" : "light"}
          centerClick={centerClick}
        />
      ) : null}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`;

const BLOG = styled.div`
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  z-index: 1;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    display: block;
    transform: rotate(90deg) translate(-50%, -50%);
  }
`;
const PROJECTS = styled.div`
  position: absolute;
  top: 50%;
  left: calc(3rem + 2vw);
  z-index: 2;
  transform: translate(-50%, -50%) rotate(-90deg);

  a {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-decoration: none;
    display: block;
    transition: all 1s linear;
  }
`;

const BottomComponents = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled.div`
  z-index: 2;

  a {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-decoration: none;
    transition: all 1s linear;
  }
`;
const SKILLS = styled.div`
  z-index: 1;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

const rotate = keyframes`
 from{
   transform: rotate(0);
 }
 to{
   transform: rotate(360deg);
 }
 `;
const opacity = keyframes`
 from{
   transform: scale(0.8);
  }
  to{
   transform: scale(1);
 }
 `;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? 80 : 50)}%;
  left: ${(props) => (props.click ? 90 : 50)}%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  transition: all 0.9s ease;
  cursor: pointer;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    padding-top: 0.5rem;
    animation: ${opacity} infinite 1s linear;
  }
`;

const DarkSide = styled.div`
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? 100 : 0)}%;
  height: ${(props) => (props.click ? 100 : 0)}%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export default Main;

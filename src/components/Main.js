import React, { useState, Suspense, lazy } from "react";
import styled, { keyframes } from "styled-components";
import { YinYang } from "../components/AllSvg";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import Introduction from "../subComponents/Introduction";
import { motion } from "framer-motion";
import Loading from "../subComponents/Loading";

const SocialMedia = lazy(() => import("../subComponents/SocialMedia"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoC = lazy(() => import("../subComponents/LogoC"));

const Main = () => {
  const [centerClick, setCenterClick] = useState(false);
  const handleClick = () => setCenterClick(!centerClick);

  const [path, setpath] = useState("");

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <PowerButton />
          <LogoC theme={centerClick ? "dark" : "light"} />

          {mq ? (
            <SocialMedia theme="light" />
          ) : (
            <SocialMedia theme={centerClick ? "dark" : "light"} />
          )}

          <Contact
            click={mq ? +centerClick : +false}
            target="_blank"
            href="mailto:abdourokinos@gmail.com"
          >
            <motion.h5
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Message...
            </motion.h5>
          </Contact>

          <BLOG
            click={mq ? +centerClick : +false}
            onClick={() => setpath("blog")}
          >
            <Link to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Blog
              </motion.h2>
            </Link>
          </BLOG>

          <PROJECTS click={centerClick}>
            <Link to="/projects">
              <motion.h2
                onClick={() => setpath("projects")}
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.h2>
            </Link>
          </PROJECTS>
          <BottomComponents>
            <ABOUT click={centerClick}>
              <Link to="/about">
                <motion.h2
                  onClick={() => setpath("about")}
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About
                </motion.h2>
              </Link>
            </ABOUT>
            <SKILLS>
              <Link to="/skills">
                <motion.h2
                  onClick={() => setpath("skills")}
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Skills
                </motion.h2>
              </Link>
            </SKILLS>
          </BottomComponents>
          <Center click={centerClick} onClick={() => handleClick()}>
            <YinYang
              width={centerClick ? 90 : 170}
              height={centerClick ? 90 : 170}
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
    </Suspense>
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
  transition: all 1s linear;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 3;

  @media only screen and (max-width: 768) {
    color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;

const BLOG = styled.div`
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  z-index: 3;
  transform: rotate(90deg) translate(-50%, -50%);
  @media (max-width: 768) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }

  a {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-decoration: none;
    transition: all 1s linear;
    @media only screen and (max-width: 50em) {
      text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
    }
  }
`;
const PROJECTS = styled.div`
  position: absolute;
  top: 50%;
  left: calc(2.5rem + 2vw);
  z-index: 2;
  transform: translate(-50%, -50%) rotate(-90deg);

  a {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-decoration: none;
    transition: all 1s linear;
    @media only screen and (max-width: 50em) {
      text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
    }
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
    @media only screen and (max-width: 50em) {
      text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
    }
  }
`;
const SKILLS = styled.div`
  z-index: 1;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    transition: all 1s linear;
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
  z-index: 5;
  cursor: pointer;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;

    @media (max-width: 768px) {
      width: ${(props) => (props.click ? "50px" : "100px")};
      height: ${(props) => (props.click ? "50px" : "100px")};
      margin-top: 1.3rem;
    }
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    padding-top: 0.5rem;
    animation: ${opacity} infinite 1s linear;
  }

  @media (max-width: 768px) {
    top: ${(props) => (props.click ? 90 : 50)}%;
    left: ${(props) => (props.click ? 85 : 50)}%;
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

  @media (max-width: 768px) {
    /* bottom: 50%; */
    left: 0;
    right: 0;
    top: 0;
    width: ${(props) => (props.click ? 100 : 0)}%;
    height: ${(props) => (props.click ? 50 : 0)}%;
  }
`;

export default Main;

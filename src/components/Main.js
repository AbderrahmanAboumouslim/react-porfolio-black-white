import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoC from "../subComponents/LogoC";
import SocialMedia from "../subComponents/SocialMedia";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoC />
        <SocialMedia />
        <Contact target="_blank" href="mailto:abdourokinos@gmail.com">
          <h5>Message...</h5>
        </Contact>
        <BLOG>
          <Link to="/blog">
            <h2>Blog</h2>
          </Link>
        </BLOG>
        <PROJECTS>
          <Link to="/projects">
            <h2>Projects</h2>
          </Link>
        </PROJECTS>
        <BottomComponents>
          <ABOUT>
            <Link to="/about">
              <h2>About</h2>
            </Link>
          </ABOUT>
          <SKILLS>
            <Link to="/skills">
              <h2>Skills</h2>
            </Link>
          </SKILLS>
        </BottomComponents>
      </Container>
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
  z-index: 1;
  transform: translate(-50%, -50%) rotate(-90deg);

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    display: block;
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
  z-index: 1;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;
const SKILLS = styled.div`
  z-index: 1;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

export default Main;

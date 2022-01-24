import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Design, Develope } from "./AllSvg";
import LogoC from "../subComponents/LogoC";
import PowerButton from "../subComponents/PowerButton";
import SocialMedia from "../subComponents/SocialMedia";
import { Link } from "react-router-dom";
import ParticlesComponent from "../subComponents/ParticlesComponent";

const MySkills = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Wrapper>
        {/* reused components */}
        <LogoC theme="light" />
        <SocialMedia theme="light" />
        <PowerButton />

        {/* skills */}
        <ParticlesComponent theme="light" />
        <Link to="/projects">
          <Box>
            <Title>
              <Design width={40} height={40} fill="currentColor" />
              Designer
            </Title>
            <Brief>Sometimes the cure is a clean design.</Brief>
            <Brief>
              <strong>i love to design</strong>
              <ul>
                <li>Websites</li>
                <li>Landing pages</li>
              </ul>
              <strong>tools</strong>
              <p>Illustrator, Photoshop, Canva, Figma etc</p>
            </Brief>
          </Box>
        </Link>
        <Link to="/projects">
          <Box>
            <Title>
              <Develope width={40} height={40} fill="currentColor" />
              Front-end Dev
            </Title>
            <Brief>I love create awesome website from scratch.</Brief>
            <Brief>
              <strong>skills</strong>
              <p>
                HTML5, CSS3, JavaScript, React, useReducer(Redux coming
                soon),Serverless-functions, Api, Styled-Components,Sass etc...
              </p>
              <strong>tools</strong>
              <p>VSCODE, Github etc.</p>
            </Brief>
          </Box>
        </Link>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.body};

  a {
    text-decoration: none;
    z-index: 1;
  }
`;

const Box = styled.div`
  width: 30vw;
  height: 60vh;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  line-height: 1.5;
  cursor: pointer;
  z-index: 3;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);
`;

const Brief = styled.div`
  font-size: calc(1rem + 1vw);
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0;
  ${Box}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  ul,
  p {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

export default MySkills;

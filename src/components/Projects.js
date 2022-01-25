import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoC from "../subComponents/LogoC";
import PowerButton from "../subComponents/PowerButton";
import SocialMedia from "../subComponents/SocialMedia";
import { ProjectsData } from "../data/ProjectsData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvg";

const Projects = () => {
  const ref = useRef();
  useEffect(() => {
    let element = ref.current;
    const slide = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", slide);
    return () => window.removeEventListener("scroll", slide);
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Wrapper>
        {/* reused components */}
        <LogoC theme="dark" />
        <SocialMedia theme="dark" />
        <PowerButton />

        {/* Projects */}
        <Box ref={ref}>
          {ProjectsData.map((p) => {
            return <Card key={p.id} data={p} />;
          })}
        </Box>

        {/* end of about */}

        <Rotate>
          <YinYang width={100} height={100} fill={DarkTheme.text} />
        </Rotate>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  position: relative;
  height: 200vh;
  overflow: hidden;
`;

const Box = styled.div`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 12rem;
  left: calc(10rem + 10vw);
  height: 40vh;
  display: flex;
`;

const rotate = keyframes`
 from{
   transform: rotate(0);
 }
 to{
   transform: rotate(360deg);
 }
 `;

const Rotate = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  color: white;
  animation: ${rotate} 1s linear infinite;
`;

export default Projects;

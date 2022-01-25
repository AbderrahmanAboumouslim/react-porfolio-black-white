import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoC from "../subComponents/LogoC";
import PowerButton from "../subComponents/PowerButton";
import SocialMedia from "../subComponents/SocialMedia";
import { ProjectsData } from "../data/ProjectsData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvg";
import { motion } from "framer-motion";

const Projects = () => {
  const ref = useRef();
  const yinyang = useRef();
  useEffect(() => {
    let element = ref.current;
    let yinElement = yinyang.current;
    const slide = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinElement.style.transform = `rotate(${window.pageYOffset}deg)`;
    };

    window.addEventListener("scroll", slide);
    return () => window.removeEventListener("scroll", slide);
  }, []);

  // framer-motion settings
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <Wrapper>
        {/* reused components */}
        <LogoC theme="dark" />
        <SocialMedia theme="dark" />
        <PowerButton />

        {/* Projects */}
        <Box ref={ref} variants={container} initial="hidden" animate="show">
          {ProjectsData.map((p) => {
            return <Card key={p.id} data={p} />;
          })}
        </Box>

        {/* end of about */}

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
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

const Box = styled(motion.div)`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 12rem;
  left: calc(10rem + 10vw);
  height: 40vh;
  display: flex;
`;

const Rotate = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  color: white;
  width: 80px;
  height: 80px;
`;

export default Projects;

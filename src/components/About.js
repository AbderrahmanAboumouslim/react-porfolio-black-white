import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import pic from "../assets/Images/spaceman.png";
import Loading from "../subComponents/Loading";

const SocialMedia = lazy(() => import("../subComponents/SocialMedia"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoC = lazy(() => import("../subComponents/LogoC"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);

const About = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Wrapper
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* reused components */}
          <LogoC theme="dark" />
          <SocialMedia theme="dark" />
          <PowerButton />
          <ParticlesComponent theme="dark" />

          {/* about */}
          <Box
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            Hello ! I'm Aboumouslim Abderrahman.
            <br />
            <br />
            Front-end Developer & Visual Designer.
            <br />
            <br />I design and develop responsive, optimized and efficient
            websites. Available for all kind of jobs.
            <br />
            <br />
            I'm interested in the whole frontend stack like trying building
            projects from scratch. I'm an independent programmer. I love to
            write codes and read books.
          </Box>
          <Image
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              top: "30%",
              right: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={pic} alt="space man" />
          </Image>

          {/* end of about */}
        </Wrapper>
      </Suspense>
    </ThemeProvider>
  );
};

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(3px);
  font-family: "Ubuntu mono", monospace;

  @media (max-width: 830px) {
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    height: 50vh;
  }
`;

const fly = keyframes`
0%{transform: translateY(-20px)}
50%{transform: translate(10px, 20px) }
100%{transform: translateY(-20px)}
`;

const Image = styled(motion.div)`
  position: absolute;

  width: 20vw;
  animation: ${fly} 3.5s ease infinite;

  @media (max-width: 1229px) {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default About;

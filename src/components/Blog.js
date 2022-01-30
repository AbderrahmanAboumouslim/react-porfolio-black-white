import React, { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import blogImg from "../assets/Images/blog-bcg.jpg";
import { Blogs } from "../data/Blogs";
import BlogContent from "./BlogContent";
import AnchorComponent from "../subComponents/AnchorComponent";
import Loading from "../subComponents/Loading";
import { motion } from "framer-motion";

const SocialMedia = lazy(() => import("../subComponents/SocialMedia"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoC = lazy(() => import("../subComponents/LogoC"));

const Blog = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Wrapper
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Container>
          <LogoC />
          <PowerButton />
          <SocialMedia />
          <AnchorComponent number={number} />
          <Center>
            <Grid variants={container} initial="hidden" animate="show">
              {Blogs.map((blog) => {
                return <BlogContent {...blog} key={blog.id} />;
              })}
            </Grid>
          </Center>
        </Container>
      </Wrapper>
    </Suspense>
  );
};

const Wrapper = styled.div`
  background-image: url(${blogImg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  /* width: 100vw; */
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  text-align: center;

  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

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

export default Blog;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blogImg from "../assets/Images/blog-bcg.jpg";
import LogoC from "../subComponents/LogoC";
import PowerButton from "../subComponents/PowerButton";
import SocialMedia from "../subComponents/SocialMedia";
import { Blogs } from "../data/Blogs";
import BlogContent from "./BlogContent";
import AnchorComponent from "../subComponents/AnchorComponent";

const Blog = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, []);

  return (
    <Wrapper>
      <Container>
        <LogoC />
        <PowerButton />
        <SocialMedia />
        <AnchorComponent number={number} />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogContent {...blog} key={blog.id} />;
            })}
          </Grid>
        </Center>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${blogImg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  text-align: center;
`;

export default Blog;

import React from "react";
import styled from "styled-components";

const BlogContent = ({ name, tags, date, imgSrc, link }) => {
  return (
    <Box target="_blank" href={link}>
      <Image img={imgSrc} />

      <Title>{name}</Title>
      <HashTags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </HashTags>
      <Date>{date}</Date>
    </Box>
  );
};

const Box = styled.a`
  width: calc(10rem + 15vw);
  height: 20rem;
  text-decoration: none;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  z-index: 5;
  margin-left: -1rem;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 1s ease;
  }

  @media (max-width: 900px) {
    margin: auto;
    width: 65vw;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  border-bottom: 1px solid ${(props) => props.theme.text};
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "karla", sans-serif;

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span``;

export default BlogContent;

import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvg";
const Card = ({ data: { id, name, description, tags, demo, github } }) => {
  return (
    <Box key={id}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </Tags>
      <Visit>
        <a href={demo} target="_blank" className="visit">
          website
        </a>
        <a href={github} target="_blank" className="github">
          <Github width={50} height={50} fill="currentColor" />
        </a>
      </Visit>
    </Box>
  );
};

const Box = styled.div`
  width: 16rem;
  height: 50vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  margin-right: 9rem;
  border-radius: 50px 0 50px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.body};

  transition: all 0.34s ease;
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1rem + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8rem + 0.5vw);
  font-weight: 500;
  font-family: "Karla", sans-serif;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  /* display: flex;
  flex-wrap: wrap; */

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 0.6rem;
  font-size: calc(0.8rem + 0.3vw);
`;

const Visit = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    margin-top: 0.3rem;
    text-decoration: none;
  }

  .visit {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    padding: 0.4rem calc(2rem + 2vw);
    border-radius: 50px 0 50px 0;
    font-size: calc(1rem + 0.5vw);
    ${Box}:hover & {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }
  }

  .github {
    color: inherit;
    ${Box}:hover & {
      & > * {
        fill: ${(props) => props.theme.text};
      }
    }
  }
`;

export default Card;

import React from "react";
import styled from "styled-components";

const LogoC = () => {
  return <Logo>CV</Logo>;
};

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "pacifico", cursive;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;

export default LogoC;

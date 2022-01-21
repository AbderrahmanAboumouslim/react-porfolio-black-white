import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
const LogoC = (props) => {
  return <Logo color={props.theme}>CV</Logo>;
};

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "pacifico", cursive;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;

export default LogoC;

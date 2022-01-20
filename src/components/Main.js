import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoC from "../subComponents/LogoC";
import SocialMedia from "../subComponents/SocialMedia";

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoC />
        <SocialMedia />
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

export default Main;

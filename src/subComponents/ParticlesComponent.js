import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
// particles files.
import darkParticle from "../particlesConfig/particlesjs-config.json";
import lightParticle from "../particlesConfig/particlesjs-config-light.json";

const ParticlesComponent = (props) => {
  return (
    <Wrapper>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? lightParticle : darkParticle}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  /* inset: 0; */
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

export default ParticlesComponent;

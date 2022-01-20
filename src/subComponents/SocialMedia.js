import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github, Facebook, Twitter, YouTube } from "../components/AllSvg";

const SocialMedia = () => {
  return (
    <Icons>
      <div>
        <Link to="/">
          <Github width={30} height={30} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <Facebook width={30} height={30} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <Twitter width={30} height={30} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <YouTube width={30} height={30} fill="currentColor" />
        </Link>
      </div>
      <Line />
    </Icons>
  );
};

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  a {
    color: inherit;
  }
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

export default SocialMedia;

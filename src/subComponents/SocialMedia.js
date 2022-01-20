import React from "react";
import styled from "styled-components";
import { Github, Facebook, Twitter, YouTube } from "../components/AllSvg";

const SocialMedia = () => {
  return (
    <Icons>
      <div>
        <a target="_blank" href="https://github.com/AbderrahmanAboumouslim">
          <Github width={30} height={30} fill="currentColor" />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.facebook.com/abdovsnoone/">
          <Facebook width={30} height={30} fill="currentColor" />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://twitter.com/its_Rokinos">
          <Twitter width={30} height={30} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCrE9losqduquJpAGJ4vNA0A"
        >
          <YouTube width={30} height={30} fill="currentColor" />
        </a>
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

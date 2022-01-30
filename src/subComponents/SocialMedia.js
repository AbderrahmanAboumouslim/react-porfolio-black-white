import React from "react";
import styled from "styled-components";
import { Github, Facebook, Twitter, YouTube } from "../components/AllSvg";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const SocialMedia = (props) => {
  const mq = window.matchMedia("(max-width: 40em)").matches;

  return (
    <Icons>
      <div>
        <a target="_blank" href="https://github.com/AbderrahmanAboumouslim">
          <Github
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.facebook.com/abdovsnoone/">
          <Facebook
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://twitter.com/its_Rokinos">
          <Twitter
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCrE9losqduquJpAGJ4vNA0A"
        >
          <YouTube
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? "5rem" : "8rem" }}
        color={props.theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 1rem;
  z-index: 3;
  a {
    color: inherit;
  }
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

export default SocialMedia;

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Anchor, Chain } from "../components/AllSvg";

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.pageYOffset;
      let screen = window.innerHeight;
      let fullBody = document.body.offsetHeight;

      let pos = Math.max(fullBody - (screen + scrollPos));
      // let finalPos = (pos * 100) / scrollPos;
      let finalPos = (pos * 100) / (fullBody - screen);

      ref.current.style.transform = `translateY(${-finalPos}%)`;

      if (window.pageYOffset > 5) {
        hideRef.current.style.display = "none";
      } else {
        hideRef.current.style.display = "block";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <PreScroll ref={hideRef}>
        <Anchor width={70} height={70} fill="currentColor" />
      </PreScroll>
      <Slider ref={ref}>
        {[...Array(props.number)].map((_, id) => {
          return (
            <Chain
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;

const PreScroll = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

export default AnchorComponent;

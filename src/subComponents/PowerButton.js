import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvg";
import { Link } from "react-router-dom";

const PowerButton = () => {
  return (
    <Power>
      <Link to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </Link>
    </Power>
  );
};

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border: 1px solid #000;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: 0.4s ease all;
  &:hover {
    background: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
    margin-top: 4px;
  }
`;

export default PowerButton;

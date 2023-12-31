import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 48%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 768px) {
    /* Adjust styles for mobile view */
    position: fixed;
    width: 100%;
    left: 45%;
    bottom: 50px;
    height: 20px;
  }
`;

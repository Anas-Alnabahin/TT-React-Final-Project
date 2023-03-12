/** @format */

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.palette.primary};
  height: 8rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function LoginFooter() {
  return <Container>&copy; 2015-2023 Upwork</Container>;
}

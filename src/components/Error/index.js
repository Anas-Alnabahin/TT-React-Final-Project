/** @format */

import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.div`
  color: ${(props) => props.theme.palette.accent};
  margin-top: 2%;
`;
const Error = ({ msg }) => {
  return <ErrorMsg> {msg} </ErrorMsg>;
};

export default Error;

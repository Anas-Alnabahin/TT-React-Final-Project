/** @format */

import styled from "styled-components";

export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.palette.text.primary};
  margin: 2rem 0 10px 0;
  text-align: center;
  span {
    color: ${(props) => props.theme.palette.primary};
    cursor: pointer;
  }
`;

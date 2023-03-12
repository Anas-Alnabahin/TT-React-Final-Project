/** @format */

import styled from "styled-components";

export const WrapperItem = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  flex-direction: column;
  margin-top: 5%;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
  }
`;
export const Input = styled.input`
  display: block;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 8px;
  &::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #d9d9d9;
  }
`;

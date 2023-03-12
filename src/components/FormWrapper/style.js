/** @format */

import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  background: ${(props) => props.theme.palette.background};
  border: 1px solid ${(props) => props.theme.palette.primary};
  border-radius: 30px;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > form {
    width: 75%;
  }
`;

/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Text } from "./style";
const TextForm = ({ text, spanText, linkTo }) => {
  return (
    <Text>
      {text} <Link to={linkTo}> {spanText} </Link>{" "}
    </Text>
  );
};

export default TextForm;

/** @format */

import React from "react";
import { CheckedBoxWrapper } from "./style";

export default function CheckBox({
  name,
  label,
  type,
  onChange,
  value,
  onBlur,
  text,
}) {
  return (
    <CheckedBoxWrapper>
      <input
        type={"checkbox"}
        placeholder={`Enter ${label}`}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <label>{text}</label>
    </CheckedBoxWrapper>
  );
}

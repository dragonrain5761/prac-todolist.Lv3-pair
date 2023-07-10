import React from "react";
import styled from "styled-components";

const Stinput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

function Input({ children, onChange, value, type }) {
  return (
    <Stinput type={type} onChange={onChange} value={value}>
      {children}
    </Stinput>
  );
}

export default Input;

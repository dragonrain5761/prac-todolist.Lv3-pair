import React from "react";
import styled from "styled-components";

function InputComponent() {
  return (
    <div>
      <h1>Input</h1>
      <StForm></StForm>
    </div>
  );
}

export default InputComponent;

const StForm = styled.form`
  display: block;
  margin-top: 0em;
`;
const StinputLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

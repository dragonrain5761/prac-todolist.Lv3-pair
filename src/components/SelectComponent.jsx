import React from "react";
import Select from "../util/select";
import Selectpotal from "../util/selectpotal";
import styled from "styled-components";

function SelectComponent() {
  return (
    <StContainer>
      <Select />
      <Selectpotal />
    </StContainer>
  );
}

export default SelectComponent;

const StContainer = styled.div`
  display: flex;
  gap: 10px;
`;

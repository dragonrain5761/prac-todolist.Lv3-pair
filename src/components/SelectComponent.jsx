import React from "react";
import Select from "../util/select";
import styled from "styled-components";
import { css } from "styled-components";

function SelectComponent() {
  return (
    <StselectBox>
      <Stcontainer>
        <StSelectWrapper>
          <Select></Select>
        </StSelectWrapper>
        <StSelectWrapper css={SecondSelectStyle}>
          <Select></Select>
        </StSelectWrapper>
      </Stcontainer>
    </StselectBox>
  );
}

export default SelectComponent;

const Stcontainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StSelectWrapper = styled.div`
  position: relative;
`;

const StselectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 100px;
  overflow: hidden;
  margin-top: 50px;
`;

//구현 못함..
const SecondSelectStyle = css`
  position: fixed;
`;

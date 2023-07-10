import React from "react";
import FirstModal from "./modal/FirstModal";
import SecondModal from "./modal/SecondModal";
import styled from "styled-components";

function ModalComponent({ children }) {
  return (
    <StModalcontainer>
      <FirstModal></FirstModal>
      <SecondModal></SecondModal>
    </StModalcontainer>
  );
}

export default ModalComponent;

const StModalcontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

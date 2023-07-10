import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Modal({ isOpen, children, onClose }) {
  const ref = useRef();
  const [backdrop, useBackdrop] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  const modalBackdropHandler = (event) => {
    if (event.target === ref.current) {
      onClose();
    }
  };

  return (
    <StmodalBox onClick={modalBackdropHandler}>
      <dialog ref={ref}>{children}</dialog>
      {/* <StBgOutside /> */}
    </StmodalBox>
  );
}

export default Modal;

const StmodalBox = styled.div`
  dialog {
    border: 1px solid rgb(255, 255, 255);
    border-radius: 12px;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 300px;
  }
`;

// const StBgOutside = styled.div`
//   position: fixed;
//   top: 0;
//   background-color: rgb(221, 221, 221);
//   width: 100vw;
//   height: 100vh;
//   opacity: 0.8;
//   z-index: 100;
// `;

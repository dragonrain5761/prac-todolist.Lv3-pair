import React, { useEffect, useRef, useState } from "react";
import Modal from "../../util/modal";
import Button from "../../util/button";
import styled from "styled-components";

function SecondModal({ children }) {
  const [show, setShow] = useState("");

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        color="rgb(0, 0, 0)"
        bg="rgb(255, 255, 255)"
        negative="true"
        size="large"
      >
        open modal
      </Button>
      <Modal isOpen={show} onClose={handleCloseModal}>
        <div>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</div>
        <StbuttonBox
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </StbuttonBox>
      </Modal>
    </>
  );
}

export default SecondModal;

const StbuttonBox = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid rgb(221, 221, 221);
  cursor: pointer;
`;

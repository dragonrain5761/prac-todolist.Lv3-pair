import React, { useEffect, useRef, useState } from "react";
import Modal from "../../util/modal";
import Button from "../../util/button";
import styled from "styled-components";

function FirstModal({ children }) {
  const [show, setShow] = useState("");

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        color="rgb(0, 0, 0)"
        bg="rgb(85, 239, 196)"
        size="medium"
      >
        open modal
      </Button>
      <Modal isOpen={show}>
        <div>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </div>
        <StbuttonBox>
          <Button
            onClick={() => {
              setShow(false);
            }}
            color="rgb(0, 0, 0)"
            bg="rgb(85, 239, 196)"
            size="small"
          >
            Close
          </Button>
          <Button
            onClick={() => {
              setShow(true);
            }}
            color="rgb(0, 0, 0)"
            bg="rgb(200, 19, 196)"
            size="small"
          >
            Done
          </Button>
        </StbuttonBox>
      </Modal>
    </>
  );
}

export default FirstModal;

const StbuttonBox = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

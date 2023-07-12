import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { StyleSheetManager } from "styled-components";

function Selectpotal() {
  const [showoptions, setShowOptions] = useState(false);
  const [position, setPosition] = useState({});
  const [values, setValues] = useState("리액트");
  const optionList = ["리액트", "자바", "스프링", "리액트네이티브"];
  const ref = useRef(null);
  useEffect(() => {
    const positions = ref.current.getBoundingClientRect();
    setPosition({
      top: positions.top + 42,
      left: positions.left + 8.6,
    });
  }, [ref]);

  //누르면 보여주게
  const onclickOptionsHandler = () => {
    setShowOptions((option) => !option);
    // console.log(item);
  };

  //선택한 값 고정 되고 노출되게
  const onChangeOptionHandler = (event) => {
    const currentValue = event.target.textContent;
    setValues(currentValue);
  };

  return (
    //styled-components에서 알 수 없는 속성(left와 top)이 DOM으로 전달되었을 때
    //발생하는 경고입니다. styled-components는 자동으로 알려지지 않은 속성을
    //필터링하여 DOM으로 전달하지 않는 기능을 가지고 있습니다.
    <StyleSheetManager
      shouldForwardProp={(prop) => prop !== "left" && prop !== "top"}
    >
      <StSelectbutton ref={ref} onClick={onclickOptionsHandler}>
        <label>{values}</label>

        {showoptions &&
          createPortal(
            <StoptionContainer left={position.left} top={position.top}>
              {optionList.map((item) => (
                <StoptionList key={item} onClick={onChangeOptionHandler}>
                  {item}
                </StoptionList>
              ))}
            </StoptionContainer>,
            document.body
          )}
      </StSelectbutton>
    </StyleSheetManager>
  );
}

export default Selectpotal;

const StoptionContainer = styled.div`
  position: absolute;
  width: 180px;
  border: 1px solid;
  border-radius: 12px;
  background-color: #ffffff;
  text-align: center;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

const StoptionList = styled.div`
  padding: 8px;
  border-radius: 12px;
  &:hover {
    background-color: #989797;
  }
`;

const StSelectbutton = styled.button`
  position: relative;
  width: 200px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: black;
    font-size: 20px;
  }
`;

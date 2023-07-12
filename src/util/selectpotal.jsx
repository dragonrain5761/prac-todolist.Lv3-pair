import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

function Selectpotal() {
  const [showoptions, setShowOptions] = useState(false);
  const [values, setValues] = useState("리액트");
  const optionList = ["리액트", "자바", "스프링", "리액트네이티브"];

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
    <StSelectbutton onClick={onclickOptionsHandler}>
      <label>{values}</label>

      {showoptions &&
        createPortal(
          <StoptionContainer>
            {optionList.map((item) => (
              <StoptionList key={item} onClick={onChangeOptionHandler}>
                {item}
              </StoptionList>
            ))}
          </StoptionContainer>,
          document.body
        )}
    </StSelectbutton>
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
  margin-left: 13.9rem;
  margin-top: -6.35rem;
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

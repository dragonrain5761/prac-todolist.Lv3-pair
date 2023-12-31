import React, { useState } from "react";
import styled from "styled-components";

function Select() {
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
      <StoptionContainer>
        {showoptions &&
          optionList.map((item) => (
            <StoptionList key={item} onClick={onChangeOptionHandler}>
              {item}
            </StoptionList>
          ))}
      </StoptionContainer>
    </StSelectbutton>
  );
}

export default Select;

const StoptionContainer = styled.div`
  position: absolute;
  top: 40px;
  width: 180px;
  border: 1px solid;
  border-radius: 12px;
  background-color: #ffffff;
  left: auto;
  text-align: center;
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

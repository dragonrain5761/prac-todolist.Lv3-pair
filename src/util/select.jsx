import React, { useState } from "react";
import styled from "styled-components";

function Select() {
  const [options, setOptions] = useState(false);
  const [values, setValues] = useState("리액트");
  const selectList = ["리액트", "자바", "스프링", "리액트네이티브"];

  //누르면 보여주게
  const onclickOptionsHandler = () => {
    setOptions((option) => !option);
    // console.log(item);
  };

  //선택한 값 고정 되고 노출되게
  const onChangeOptionHandler = (event) => {
    const currentValue = event.target.textContent;
    setValues(currentValue);
  };

  return (
    <StSelectBox onClick={onclickOptionsHandler}>
      <label>{values}</label>
      {selectList.map((item) => {
        return (
          <StoptionList
            key={item}
            value={item}
            optionShow={options}
            onClick={onChangeOptionHandler}
          >
            {item}
          </StoptionList>
        );
      })}
    </StSelectBox>
  );
}

export default Select;

const StoptionList = styled.div`
  display: ${(props) => (props.optionShow ? "block" : "none")};

  &:hover {
    background-color: #989797;
  }
`;

const StSelectBox = styled.button`
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

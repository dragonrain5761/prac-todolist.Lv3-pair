import React, { useState } from "react";
import styled from "styled-components";
import Input from "../util/input";
import Button from "../util/button";

function InputComponent({ children, onChange, type }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  // 정규식 표현에 대해서 이해가 아직 부족하다. 잘 모르겠다.
  // 숫자 입력값을 받아서 처리하는 이벤트 핸들러
  const priceHandler = (event) => {
    const rawValue = event.target.value; // 입력값을 가져옵니다.

    // 숫자가 아닌 문자를 제거합니다.
    const numericValue = rawValue.replace(/\D/g, "");

    // 숫자를 3자리마다 ','로 구분하여 포맷팅합니다.
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // 포맷팅된 가격을 상태값에 설정합니다.
    setPrice(formattedValue);
  };

  const onsubmitHandler = () => {
    if (name === "" || price === "") return alert("데이터를 입력해주세요");
    else alert(`{name:${name}, price: ${price}}`);
  };

  return (
    <form onSubmit={onsubmitHandler}>
      <StinputBox>
        <label>이름</label>
        <Input type="text" onChange={nameHandler} value={name}></Input>
        <label>가격</label>
        <Input type="text" onChange={priceHandler} value={price}></Input>

        <Button color="rgb(0, 0, 0)" bg="rgb(85, 239, 196)" size="small">
          저장
        </Button>
      </StinputBox>
    </form>
  );
}

export default InputComponent;

const StinputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

import React from "react";
import styled from "styled-components";
import GlobalStyle from "./style/globalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import ModalComponent from "./components/ModalComponent";
import SelectComponent from "./components/SelectComponent";

function App() {
  return (
    <>
      <GlobalStyle />
      <br></br>
      <h1>Button</h1>
      <ButtonComponent></ButtonComponent>
      <br></br>
      <h1>Input</h1>
      <InputComponent></InputComponent>
      <br></br>
      <h1>Modal</h1>
      <ModalComponent></ModalComponent>
      <br></br>
      <h1>Select</h1>
      <SelectComponent></SelectComponent>
    </>
  );
}

export default App;

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
      <h1>button</h1>
      <ButtonComponent></ButtonComponent>
      <InputComponent></InputComponent>
      <ModalComponent></ModalComponent>
      <SelectComponent></SelectComponent>
    </>
  );
}

export default App;

import styled, { css } from "styled-components";

export const Stbutton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
  border: 3px solid
    ${(props) =>
      props.$primary
        ? "rgb(85, 239, 196)"
        : props.$negative
        ? "rgb(239, 100, 123)"
        : "rgb(255, 255, 255)"};
  background-color: ${(props) => props.$bg};

  ${(props) =>
    props.size === "large" &&
    css`
      height: 50px;
      width: 200px;
      font-weight: 600;
    `};
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 45px;
      width: 130px;
      font-weight: 500;
    `};
  ${(props) =>
    props.size === "small" &&
    css`
      height: 40px;
      width: 100px;
      font-weight: 400;
    `};
`;

function Button({ children, color, bg, primary, negative, onClick, size }) {
  return (
    <Stbutton
      color={color}
      $bg={bg}
      $primary={primary}
      $negative={negative}
      onClick={onClick}
      size={size}
    >
      {children}
    </Stbutton>
  );
}

export default Button;

import Button from "../util/button";
import styled from "styled-components";

const StbuttonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  display: flex;
  flex-direction: row;
`;

function ButtonComponent({
  children,
  color,
  bg,
  primary,
  negative,
  onClick,
  size,
}) {
  return (
    <StbuttonContainer>
      <Button
        color="rgb(0, 0, 0)"
        bg="rgb(255, 255, 255)"
        primary
        size="large"
        onClick={() => alert("버튼을 만들어보세요")}
      >
        Large Primary Button.
      </Button>
      <Button color="rgb(0, 0, 0)" bg="rgb(85, 239, 196)" size="medium">
        medium
      </Button>
      <Button color="rgb(0, 0, 0)" bg="rgb(85, 239, 196)" size="small">
        small
      </Button>
    </StbuttonContainer>
  );
}

export default ButtonComponent;

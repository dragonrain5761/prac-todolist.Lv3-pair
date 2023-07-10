import Button from "../util/button";
import styled from "styled-components";

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
      <StPrimaryBox>
        <Button
          color="rgb(0, 0, 0)"
          bg="rgb(255, 255, 255)"
          primary="true"
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
      </StPrimaryBox>
      <StNegativeBox>
        <Button
          color="rgb(0, 0, 0)"
          bg="rgb(255, 255, 255)"
          negative="true"
          size="large"
          onClick={() => prompt("어렵다.")}
        >
          Large Negative Button.
        </Button>
        <Button color="rgb(214, 48, 49)" bg="rgb(250, 177, 160)" size="medium">
          medium
        </Button>
        <Button color="rgb(214, 48, 49)" bg="rgb(250, 177, 160)" size="small">
          small
        </Button>
      </StNegativeBox>
    </StbuttonContainer>
  );
}

export default ButtonComponent;

const StbuttonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  display: flex;
`;

const StPrimaryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StNegativeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

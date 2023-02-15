import React from "react";
import styled from "styled-components";

interface Props {
  buttonClick: () => void;
  isDone: boolean;
}
export const Buttons = ({ buttonClick, isDone }: Props) => {
  return isDone ? (
    <StyledRedoButton onClick={() => buttonClick()}>다시하기</StyledRedoButton>
  ) : (
    <Checkbox
      onClick={() => {
        buttonClick();
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
    </Checkbox>
  );
};

const Checkbox = styled.svg`
  margin: 0;
  padding: 0;
  margin: 0;
  width: 60px;
  background: none;
  color: green;
  cursor: pointer;
`;

const StyledRedoButton = styled.button`
  width: 60px;
  text-shadow: 0.3px 0.3px #666;
  background: none;
  color: blue;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  border-style: none;
`;

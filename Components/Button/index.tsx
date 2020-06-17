import React from "react";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

const StyledButton = styled.button`
  flex-shrink: 0;
  align-items: center;
  background: ${Theme.colors.purpleBase};
  border-color: ${Theme.colors.purpleBase};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  color: white;
  display: inline-flex;
  height: 50px;
  justify-content: center;
  min-width: 144px;
  width: fit-content;
  outline: 0;
  transition: background ${Theme.animations.fast} ease-in-out,
    box-shadow ${Theme.animations.fast} ease-in-out;
  & :focus,
  & :active {
    ${Theme.shadows.active}
  }
  & :hover {
    background: ${Theme.colors.purple200};
  }
  & :active {
    background: ${Theme.colors.purple500};
  }
`;

export const Button: React.FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

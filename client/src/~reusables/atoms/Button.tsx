// modules
import styled from "styled-components";

// styles
import { xs_space } from "../variables/spacing";
import { text, primary, offWhite } from "../variables/colors";
import { body_1 } from "../variables/font-sizes";

export interface ButtonProps {
  width?: string;
  bgCol?: string;
  color?: string;
}

export const Button = styled("button")<ButtonProps>`
  font-size: ${body_1};
  font-weight: 600;
  padding: 6px ${xs_space};
  min-width: ${props => (props.width ? props.width : "160px")};
  height: 40px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.02);
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background: ${props => (props.bgCol ? props.bgCol : primary)};
  color: ${offWhite};
`;

export const ButtonSecondary = styled(Button)`
  background: ${offWhite};
  color: ${text};
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${text};
  padding: 0;
  min-width: auto;
  box-shadow: none;
`;

import styled from "styled-components";
import { SPACES, COLORS, SIZES } from "../../../theme";

export const Form = styled.form`
  display: flex;
  align-items: start;
`;

export const Input = styled.input`
  margin-top: ${SPACES.s};
  padding: ${SPACES.xs};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-right: ${SPACES.xl};
`;

export const ErrorText = styled.p`
  padding-top: ${SPACES.xs};
  font-size: ${SIZES.s};
  color: ${COLORS.tomato};
`;

export const Button = styled.button`
  margin-left: ${SPACES.xl};
  cursor: pointer;
  height: 26px;
`;

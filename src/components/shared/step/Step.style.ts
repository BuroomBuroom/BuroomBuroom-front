import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const StepBox = styled.aside`
  display: flex;
  width: 40%;
  justify-content: space-between;
  column-gap: 4rem;
`;

export const StepItemBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  font-size: 0.75rem;
  color: ${colors.BLACK_7};
`;

export const StepItem = styled.div<{ onStep?: boolean }>`
  display: flex;
  aspect-ratio: 1 / 1;
  width: 70%;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border-radius: 50%;
  background-color: ${(props) => (props.onStep ? colors.BLACK_8 : colors.BLACK_1)};
`;

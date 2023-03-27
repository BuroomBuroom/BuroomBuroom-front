import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const StepBox = styled.aside`
  display: flex;
  flex-direction: column;
  width: 14%;
  row-gap: 3%;
`;

export const StepItem = styled.div<{ onStep?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 18%;
  padding: 6%;
  background-color: ${(props) => (props.onStep ? colors.BLUE_5 : colors.BLACK_2)};
  border-radius: 50px;
  color: white;
  img {
    width: 18%;
  }
`;

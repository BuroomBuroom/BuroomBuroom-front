import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 40vh;
`;

export const RouteInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10%;
  padding: 5% 0;
  row-gap: 10px;
`;

export const Routes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 10px;
`;

export const RouteItem = styled.span`
  background-color: ${colors.BLACK_1};
  padding: 0.7rem;
  column-gap: 0.5rem;
  border-radius: 50px;
  font-size: 14px;
  span {
    margin-left: 5px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    padding: 5px 8px;
    border-radius: 50px;
    background-color: ${colors.GREEN_5};
  }
`;

export const CheckBox = styled.div<{ checked: boolean }>`
  cursor: pointer;
  font-size: 25px;
  width: 30px;
  height: 30px;
  text-align: center;
  position: absolute;
  border: 1px solid ${colors.BSM_GREEN};
  background: rgba(79, 172, 165, 0.2);
  border-radius: 30px;
  margin: 10px;
`;

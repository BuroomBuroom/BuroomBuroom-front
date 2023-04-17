import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Article = styled.article`
  text-align: end;
  width: 100%;
  height: calc(100% - 80px);
`;

export const BookingLayout = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 70%;
  height: 65%;
  padding: 5%;
  background-color: ${colors.BLACK_0};
  border-radius: 15px;
`;

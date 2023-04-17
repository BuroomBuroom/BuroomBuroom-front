import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../../../constants/colors";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonStyle {...props} />;
};

const ButtonStyle = styled.button`
  padding: 15px 50px;
  background-color: ${colors.BLACK_7};
  font-size: 14px;
  border-radius: 5px;
  border: none;
  color: white;
  &:hover {
    background-color: ${colors.BLACK_8};
  }
`;

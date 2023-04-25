import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../../../constants/colors";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonStyle {...props} />;
};

const ButtonStyle = styled.button`
  padding: 1rem 6.25rem;
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${colors.BLACK_7};
  color: black;
  transition: 0.2s ease-out;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${colors.BLACK_8};
  }
`;

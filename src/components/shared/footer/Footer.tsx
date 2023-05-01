import React from "react";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Footer = () => {
  return (
    <FooterStyle>
      <span>프실 수행행</span>
      <span>
        #부릉부릉 #BSSM <a href="https://github.com/BuroomBuroom">#Github</a>
      </span>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  width: 100%;
  height: 9rem;
  position: relative;
  bottom: 0;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  color: ${colors.BLACK_3};
  background-color: ${colors.BLACK_1};
  font-weight: 700;
  span > a {
    text-decoration: underline;
  }
`;

import styled from "styled-components";

export const Logo = styled.img`
  width: 8%;
`;

export const Navigation = styled.nav`
  display: flex;
  width: 30%;
  justify-content: space-between;
  .active {
    font-weight: 700;
  }
  a {
    font-size: 14px;
    color: black;
    text-decoration: none;
  }
`;

import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderLayout } from "../../layouts/HeaderLayout";
import * as S from "./Header.style";

export const Header = () => {
  const url = `https://auth.bssm.kro.kr/oauth?clientId=${process.env.REACT_APP_OAUTH_CLIENT_ID}&redirectURI=${process.env.REACT_APP_REDIRECT_URI}`;
  return (
    <HeaderLayout>
      <S.Logo src="/assets/BRBR.png" />
      <S.Navigation>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/booking">예약하기</NavLink>
        <NavLink to="/timetable">버스 시간표</NavLink>
        <NavLink to={url}>로그인</NavLink>
      </S.Navigation>
    </HeaderLayout>
  );
};

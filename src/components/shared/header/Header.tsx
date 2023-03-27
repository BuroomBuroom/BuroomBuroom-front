import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderLayout } from "../../layouts/HeaderLayout";
import * as S from "./Header.style";

export const Header = () => {
  return (
    <HeaderLayout>
      <S.Logo src="/assets/BRBR.png" />
      <S.Navigation>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/booking">예약하기</NavLink>
        <NavLink to="/timetable">버스 시간표</NavLink>
        <NavLink to="/mypage">마이페이지</NavLink>
      </S.Navigation>
    </HeaderLayout>
  );
};

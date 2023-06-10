import React from "react";
import { AuthFeature } from "../../features/auth/auth.feature";
import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Mypage = () => {
  const { user } = AuthFeature();

  return (
    <MyPageStyle>
      <Profile>
        <SubInfo>자랑스러운 BSSM 스튜던트</SubInfo>
        <MainInfo>{user.studentName}</MainInfo>
        <SubInfo>
          {user.grade}학년 {user.classNo}반 {user.studentNo}번
        </SubInfo>
      </Profile>
      <Tickets>
        <InfoBox>
          <Info>
            <SubInfo>탑승일자</SubInfo>
            <MainInfo>2023년 6월 16일 (금)</MainInfo>
          </Info>
          <Info>
            <SubInfo>예약일자</SubInfo>
            <MainInfo>2023년 6월 10일 (토)</MainInfo>
          </Info>
          <Info>
            <SubInfo>노선 / 좌석</SubInfo>
            <MainInfo>2호차 / H3호석</MainInfo>
          </Info>
          <Info>
            <SubInfo>만료 날짜</SubInfo>
            <MainInfo>2023년 6월 17일 (토)</MainInfo>
          </Info>
        </InfoBox>
        <img src="/assets/bus.svg" />
      </Tickets>
    </MyPageStyle>
  );
};

const MyPageStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 25px;
  gap: 30px;
`;

const Profile = styled.div`
  display: flex;
  width: 30%;
  height: 80px;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${colors.BLACK_1};
  border-radius: 30px;
  padding: 30px;
`;

const Tickets = styled.div`
  display: flex;
  width: 70%;
  height: 20%;
  background-color: white;
  border-radius: 30px;
  border: 1px solid ${colors.BLACK_6};
  padding: 40px;
  justify-content: space-between;

  img {
    height: 100%;
  }
`;

const SubInfo = styled.span`
  font-size: 15px;
  color: ${colors.BLACK_6};
`;

const MainInfo = styled.span`
  font-size: 17px;
  color: black;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

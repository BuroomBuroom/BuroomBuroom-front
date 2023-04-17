import React from "react";
import * as S from "./Content.style";

export const Content = ({ step }: { step: number }) => {
  const day = new Date();
  console.log(day);

  return (
    <S.ContentLayout>
      {step === 1 ? (
        <S.InfoLayout>
          <S.InfoBox>
            <span>탑승 날짜</span>
            <span>2023 / 4 / 7 (금)</span>
          </S.InfoBox>
          <S.InfoBox>
            <span>예약 가능 버스 / 인원 수</span>
            <span>4대 / 65명</span>
          </S.InfoBox>
          <S.InfoBox>
            <span>예약 인원 수</span>
            <span>2명</span>
          </S.InfoBox>
        </S.InfoLayout>
      ) : (
        <div>Content</div>
      )}
    </S.ContentLayout>
  );
};

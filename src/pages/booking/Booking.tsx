import React, { useState } from "react";
import * as S from "./Booking.style";
import { Title } from "../../components/shared/common/title/Title";
import { Step } from "../../components/shared/step/Step";

export const Booking = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <Title title="셔틀버스 예약하기" />
      <S.Article>
        <Step step={step} />
      </S.Article>
    </>
  );
};

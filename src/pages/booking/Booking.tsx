import React, { useState } from "react";
import * as S from "./Booking.style";
import { Title } from "../../components/shared/common/title/Title";
import { Step } from "./step/Step";
import { Content } from "./content/Content";
import { Button } from "../../components/shared/common/button/Button";

export const Booking = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <Title title="예약하기" />
      <S.Article>
        <S.BookingLayout>
          <Step step={step} />
          <S.Section>
            <Content step={step} />
          </S.Section>
        </S.BookingLayout>
        <Button onClick={() => setStep((prev) => prev + 1)} children={step === 1 ? "예약 시작하기" : "다음으로"} />
      </S.Article>
    </>
  );
};

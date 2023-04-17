import React from "react";
import { stepItem } from "../../../constants/stepItem";
import * as S from "./Step.style";

export const Step = ({ step }: { step: number }) => {
  return (
    <S.StepBox>
      {stepItem.map((s, index) => {
        return (
          <S.StepItem onStep={index + 1 === step}>
            <img src={`/assets/number/${index + 1}.png`} />
            <span>{s}</span>
          </S.StepItem>
        );
      })}
    </S.StepBox>
  );
};

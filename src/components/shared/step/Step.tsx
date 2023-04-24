import React from "react";
import * as S from "./Step.style";
import Icon from "../common/icon/Icon";
import { stepItem } from "../../../constants/stepItem";

export const Step = ({ step }: { step: number }) => {
  return (
    <S.StepBox>
      {stepItem.map((s, index) => {
        return (
          <S.StepItemBox>
            <S.StepItem onStep={step === index + 1}>
              <Icon onStep={step} stepNum={index + 1} />
            </S.StepItem>
            <span>{s}</span>
          </S.StepItemBox>
        );
      })}
    </S.StepBox>
  );
};

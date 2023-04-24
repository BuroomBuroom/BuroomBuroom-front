import React from "react";
import * as S from "./Loading.style";
import { Oval } from "react-loader-spinner";

export const Loading = () => {
  return (
    <S.LoadingBG>
      <Oval secondaryColor="#808080" color="#ffffff" height={100} width={100} />
    </S.LoadingBG>
  );
};

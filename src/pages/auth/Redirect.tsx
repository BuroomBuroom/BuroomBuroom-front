import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAuthToken, getBSMAuthToken } from "../../apis/auth";
import { useMutation } from "react-query";

export const Redirect = () => {
  const [searchParams] = useSearchParams(useLocation().search);

  const { mutate } = useMutation(getAuthToken, {
    onSuccess(data, variables, context) {
      console.log(data, variables, context);
    },
  });

  getBSMAuthToken(searchParams.get("code") as string).then((res) => {
    console.log(res.data.token);
    mutate(res.data.token);
  });

  return <div>Redirect</div>;
};

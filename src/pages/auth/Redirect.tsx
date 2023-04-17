import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getBSMAuthToken } from "../../apis/auth";
import { Loading } from "../../components/shared/loading/Loading";
import { AuthFeature } from "../../features/auth/auth.feature";

export const Redirect = () => {
  const [searchParams] = useSearchParams(useLocation().search);
  const { login } = AuthFeature();

  useEffect(() => {
    getBSMAuthToken(searchParams.get("code") as string).then((res) => login.mutate(res.data.token));
  }, []);

  return <Loading />;
};

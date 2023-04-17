import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getAuthToken, getBSMAuthToken } from "../../apis/auth";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { authState } from "../../atoms/auth/auth.atom";
import { Loading } from "../../components/shared/loading/Loading";

export const Redirect = () => {
  const [searchParams] = useSearchParams(useLocation().search);
  const setUser = useSetRecoilState(authState);
  const navigate = useNavigate();

  const { mutate } = useMutation(getAuthToken, {
    onSuccess(data) {
      setUser(data.user_token);
      navigate("/");
    },
  });

  useEffect(() => {
    getBSMAuthToken(searchParams.get("code") as string).then((res) => mutate(res.data.token));
  }, []);

  return <Loading />;
};

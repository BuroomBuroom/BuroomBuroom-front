import React from "react";
import { useMutation } from "react-query";
import { getAuthToken } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/auth/auth.atom";
import { useSetRecoilState } from "recoil";

export const AuthFeature = () => {
  const setUser = useSetRecoilState(authState);
  const navigate = useNavigate();
  const login = useMutation(getAuthToken, {
    onSuccess(data) {
      console.log(data);

      setUser(data.user_token);
      navigate("/");
    },
  });
  return { login };
};

import React from "react";
import { useMutation } from "react-query";
import { getAuthToken } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/auth/auth.atom";
import { useRecoilState } from "recoil";
import { AuthType } from "../../atoms/auth/type";

export const AuthFeature = () => {
  const [user, setUser] = useRecoilState<AuthType>(authState);
  const navigate = useNavigate();
  const login = useMutation(getAuthToken, {
    onSuccess(data) {
      console.log(data);

      setUser(data);
      navigate("/");
    },
  });
  return { login, user };
};

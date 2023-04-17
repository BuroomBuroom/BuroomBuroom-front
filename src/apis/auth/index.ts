import axios from "axios";
import { customAxios } from "../customAxios";
const clientId = process.env.REACT_APP_OAUTH_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

export const getBSMAuthToken = async (code: string) => {
  return await axios.post(`/token`, {
    clientId: clientId,
    clientSecret: clientSecret,
    authCode: code,
  });
};

export const getAuthToken = async (bsmToken: string) => {
  return (await customAxios.get(`/oauth?token=${bsmToken}`)).data;
};

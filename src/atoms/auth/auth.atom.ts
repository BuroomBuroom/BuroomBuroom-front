import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { AuthType } from "./type";

const { persistAtom } = recoilPersist({
  key: "authLocal",
  storage: localStorage,
});

export const authState = atom<AuthType>({
  key: "authState",
  default: {
    token: "",
    classNo: "",
    grade: "",
    studentName: "",
    studentNo: "",
  },
  effects_UNSTABLE: [persistAtom],
});

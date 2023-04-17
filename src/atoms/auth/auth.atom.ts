import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "authLocal",
  storage: localStorage,
});

export const authState = atom({
  key: "authState",
  default: {
    userToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});

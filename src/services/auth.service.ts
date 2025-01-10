import axios from "axios";
import { endpoints } from "./endpoints.service";
import { AuthSignInType } from "@/app/api/auth/sign-in/route";
import { AxiosError } from "@/types/errors";

export const authSignInService = async (formData: AuthSignInType) => {
  try {
    const { data } = await axios.post(endpoints.auth.signIn, formData);
    console.log("authSignInService", data);
    return data;
  } catch (error) {
    const message = (error as AxiosError).response?.data.message;
    // notification
    console.log("authSignInService", message);
  }
};

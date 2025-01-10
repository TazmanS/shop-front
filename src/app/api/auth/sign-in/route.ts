import apiService from "@/app/api/_axios";
import endpoints from "@/app/api/endpoints.api";
import { AxiosError } from "@/types/errors";
import { NextRequest, NextResponse } from "next/server";

export type AuthSignInType = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  const formData = await req.json();
  try {
    const data = await apiService.post(endpoints.auth.signIn, formData);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const message = (error as AxiosError).message;
    const status = (error as AxiosError).status;
    return NextResponse.json({ message: message }, { status: status });
  }
}

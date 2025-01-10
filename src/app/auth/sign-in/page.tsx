"use client";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { authSignInService } from "@/services/auth.service";

const validationSchema = Yup.object({
  login: Yup.string().required("Login is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

type SignInFormDataType = {
  login: string;
  password: string;
};

export default function SignInPage() {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: SignInFormDataType) => {
      console.log("Form Submitted", values);
    },
  });

  const handleClick = () => {
    authSignInService({ email: "test@gmail.com", password: "123123" });
  };

  return (
    <>
      <h3 className="text-lg">Sign In</h3>

      <button onClick={handleClick}>test</button>

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 flex flex-col items-center"
      >
        <BaseInput
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="login"
          placeholder="Login"
          error={
            formik.touched.login && formik.errors.login
              ? formik.errors.login
              : undefined
          }
        />

        <BaseInput
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          placeholder="Password"
          type="password"
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : undefined
          }
        />

        <BaseButton type="submit">Sign In</BaseButton>
      </form>
    </>
  );
}

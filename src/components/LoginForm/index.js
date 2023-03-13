/** @format */

import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { apiUrl } from "../../utils/api";
import Error from "../Error";
import FormBtn from "../FormBtn";
import FormItem from "../FormItem";
import FormTitle from "../FormTitle";
import FormWrapper from "../FormWrapper";
import TextForm from "../TextForm";

export default function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const name = "PlaceHolder";

  const onSubmit = async ({ email, password }) => {
    const res = await axios
      .post(`${apiUrl}users`, { email, password, name })
      .catch((err) => {
        console.log(err.message);
      });

    if (res) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <FormTitle title={"Log in to your account"} />
        <FormItem
          name={"email"}
          label={"Email"}
          type={"email"}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <Error msg={formik.errors.email} />
        )}
        <FormItem
          name={"password"}
          label={"Password"}
          type={"password"}
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <Error msg={formik.errors.password} />
        )}
        <FormBtn text={"Log in"} />
        <TextForm
          name={"signup"}
          text="Don't have an account?"
          spanText='Sign up'
          linkTo={"/signup"}
        />
      </form>
    </FormWrapper>
  );
}

/** @format */

import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { apiUrl } from "../../utils/api";
import CheckBox from "../CheckBox";
import Error from "../Error";
import FormBtn from "../FormBtn";
import FormItem from "../FormItem";
import FormTitle from "../FormTitle";
import FormWrapper from "../FormWrapper";
import TextForm from "../TextForm";

export default function SignupForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms of service"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    terms: false,
  };

  const onSubmit = async ({ name, email, password }) => {
    const res = await axios
      .post(`${apiUrl}users`, { name, email, password })
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
        <FormTitle title={"Sign up to find wrok you love"} />
        <FormItem
          name={"name"}
          label={"Name"}
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <Error msg={formik.errors.name} />
        )}
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
        <CheckBox
          text={"Agree to terms of service"}
          name={"terms"}
          onChange={formik.handleChange}
          value={formik.values.terms}
          onBlur={formik.handleBlur}
        />
        {formik.touched.terms && formik.errors.terms && (
          <Error msg={formik.errors.terms} />
        )}
        <FormBtn text={"Create my account"} />
        <TextForm
          name={"terms"}
          text='Already have an account ?'
          spanText='Login'
          linkTo={"/login"}
        />
      </form>
    </FormWrapper>
  );
}

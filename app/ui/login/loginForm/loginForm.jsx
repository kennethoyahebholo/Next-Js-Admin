"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      // Convert form values to FormData
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);

      try {
        const resp = await authenticate(null, formData); // Pass `null` for `prevState` if not used
        if (resp?.includes("Wrong Credentials")) setError(resp);
      } catch (err) {
        setError("Authentication failed");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1>Login</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(event) => {
            formik.handleChange(event);
            setError(null);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className={styles.input}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className={styles.error}>{formik.errors.username}</div>
        ) : null}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(event) => {
            formik.handleChange(event);
            setError(null);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={styles.input}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? "Loading..." : "Login"}
      </button>

      {error && <div className={styles.apiError}>{error}</div>}
    </form>
  );
};

export default LoginForm;

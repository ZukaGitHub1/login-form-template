import React from 'react'
import {useField, Form, Formik } from "formik";
import { advancedSchema } from '../Validation/Valid';
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <form>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
   
    </form>
  );
};
const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "",  acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
        <h1>Log in</h1>
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Username"
          />
            <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
          />

          <button disabled={isSubmitting} type="submit">
            Log-in
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm

import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const basicSchema = yup.object().shape({
    firstname: yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Enter your Firstname'),
  lastname: yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Enter your Lastname'),
  email: yup.string().email("Please enter a valid email").required("Enter your email: example@outlook.com"),
  age: yup.number().positive().integer().required("Enter your Age"),
  password: yup
    .string()
    .min(4)
    .max(10)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Enter your Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
export const advancedSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Enter your email: example@outlook.com"),
  password: yup
    .string()
    .min(4)
    .max(10)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Enter your Password")
});
import * as yup from "yup";

export const FormRegisterSchema = yup.object().shape({
  fullname: yup
  .string()
  .required("Your full name is required."),
  email: yup
  .string()
  .required("E-mail is required.")
  .email("E-mail invalid!"),
  country: yup
  .string()
  .required("Country is required."),
  profession: yup
  .string()
  .required("Your profession is required"),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must contain at least 8 characters. "),
    terms: yup
    .boolean()
    .test("terms", 
    "You must agree to the terms.",
    (value) => value === true
    )
});

export const FormLoginSchema = yup.object().shape({
  email: yup
  .string()
  .required("E-mail is required.")
  .email("E-mail invalid!"),
  password: yup
  .string()
  .required("Password is required.")
  .min(8, "Password must contain at least 8 characters. "),
})

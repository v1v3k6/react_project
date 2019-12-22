import * as Yup from "yup";
const SignUpSchemaGenerator = Yup.object().shape({
  email: Yup.string()
    .min(10, "Email address is too short!")
    .max(60, "Email address is too long!")
    .required("This is a mandatory field!")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email address structure is not acceptable!"
    ),
  password: Yup.string()
    .min(8, "Password is too short!")
    .max(32, "Password is too long!")
    .required("This is a mandatory field!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/,
      "Your password must be a combination of letters, symbols and numbers!"
    ),
  phone: Yup.string()
    .matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      "Phone number must be in the following format: +91 (123) 456-7890"
    )
    .required("Phone number is mandatory!"),
  address: Yup.string().required("Address cannot be left blank!")
});

const SignInSchemaGenerator = Yup.object().shape({
  email: Yup.string()
    .min(10, "Email address is too short!")
    .max(60, "Email address is too long!")
    .required("This is a mandatory field!")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email address structure is not acceptable!"
    ),
  password: Yup.string()
    .min(8, "Password is too short!")
    .max(32, "Password is too long!")
    .required("This is a mandatory field!")
});

export default SignInSchemaGenerator;
export { SignInSchemaGenerator, SignUpSchemaGenerator };

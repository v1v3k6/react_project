import React from "react"
import { Formik } from "formik"
import * as yup from "yup"

const loginSchema = yup.object().shape({
  emailid: yup
    .string()
    .min(5, "Too Short!")
    .max(32, "Too Long!")
    .required("Required")
})

class Signin extends React.Component {
  render() {
    return (
      <Formik
        initialValues={}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={loginSchema}
      ></Formik>
    )
  }
}

export default Signin
export { Signin }

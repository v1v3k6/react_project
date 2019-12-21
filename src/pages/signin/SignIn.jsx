import React from "react";
import { Formik } from "formik";

class Signin extends React.Component {
  render() {
    return (
      <Formik
        initialValues={this.state.InitialFormValues}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={loginValidation}
      ></Formik>
    );
  }
}

export default Signin;
export { Signin };

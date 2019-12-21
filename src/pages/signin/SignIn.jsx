import React from "react";
import { Formik } from "formik";
import SchemaGenerator from "src/dependencies/schemas";
import ControlList from "./ControlList.jsx";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Signin extends React.Component {
  @observable username = "";
  generateInitialValues() {
    return ControlList.map(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <Formik
        initialValues={this.generateInitialValues()}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SchemaGenerator}
      ></Formik>
    );
  }
}

export default Signin;
export { Signin };

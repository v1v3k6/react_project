import React from "react";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { observable } from "mobx";
import SchemaGenerator from "src/dependencies/schemas";
import ControlList from "./ControlList.jsx";
import ControlCreator from "src/components/controlcreator";
import {
  performLoginAction,
  isLoggedIn,
  performLogoutAction
} from "src/dependencies/loginvalidator";

@observer
class Signin extends React.Component {
  @observable dataSet = {};
  generateInitialValues() {
    ControlList.map(data => {
      this.dataSet[data.name] = data.value;
    });
  }
  renderFormComponents = localProps => {
    const { errors, touched, handleChange } = localProps;
    return (
      <Form className="rounded shadow border border-dark p-2 w-50">
        <ControlCreator
          ControlList={ControlList}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
        />
        <Button type="submit" className="btn btn-primary form-control">
          Click Me!
        </Button>
      </Form>
    );
  };
  render() {
    this.generateInitialValues();
    return (
      <Formik
        initialValues={{ ...this.dataSet }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SchemaGenerator}
        className="d-flex justify-content-center w-100 mx-auto"
      >
        {({ errors, touched, handleChange }) => {
          return this.renderFormComponents({ errors, touched, handleChange });
        }}
      </Formik>
    );
  }
}

export default Signin;
export { Signin };

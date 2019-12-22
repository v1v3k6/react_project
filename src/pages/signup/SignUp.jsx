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
import "./styles.scss";

@observer
class Signup extends React.Component {
  @observable dataSet = {};
  generateInitialValues() {
    ControlList.map(data => {
      this.dataSet[data.name] = data.value;
    });
  }
  renderFormComponents = localProps => {
    const { errors, touched, handleChange } = localProps;
    return (
      <Form className="rounded shadow my-2 p-2 w-25 form-container">
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
      <div className="form-background w-100 d-flex justify-content-center">
        <Formik
          initialValues={{ ...this.dataSet }}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={SchemaGenerator}
          className="d-flex justify-content-center text-white w-100 mx-auto"
        >
          {({ errors, touched, handleChange }) => {
            return this.renderFormComponents({ errors, touched, handleChange });
          }}
        </Formik>
      </div>
    );
  }
}

export default Signup;
export { Signup };

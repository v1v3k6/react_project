import React from "react";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { SignUpSchemaGenerator } from "src/dependencies/schemas";
import ControlList from "./ControlList.jsx";
import ControlCreator from "src/components/controlcreator";
import {
  simulateAccountCreation,
  loginData
} from "src/dependencies/loginvalidator";
import "./styles.scss";

@observer
class Signup extends React.Component {
  @observable dataSet = {};
  constructor(props) {
    super(props)
  }
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
          Sign Up
        </Button>
      </Form>
    );
  };
  render() {
    this.generateInitialValues();
    return (
      <>
        {!loginData() && (
          <div className="form-background w-100 d-flex justify-content-center">
            <Formik
              initialValues={{ ...this.dataSet }}
              onSubmit={values => {
                simulateAccountCreation(values);
                this.props.history('/signup')
              }}
              validationSchema={SignUpSchemaGenerator}
              className="d-flex justify-content-center text-white w-100 mx-auto"
            >
              {({ errors, touched, handleChange }) => {
                return this.renderFormComponents({
                  errors,
                  touched,
                  handleChange
                });
              }}
            </Formik>
          </div>
        )}
        {loginData() && (
          <div className="alert-success">Signed up successfully!</div>
        )}
      </>
    );
  }
}

export default Signup;
export { Signup };

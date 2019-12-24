import React from "react";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { SignInSchemaGenerator } from "src/dependencies/schemas";
import ControlList from "./ControlList.jsx";
import ControlCreator from "src/components/controlcreator";
import { performLoginAction, isLoggedIn } from "src/dependencies/loginvalidator";
import "./styles.scss";

@observer
class Signin extends React.Component {
  @observable dataSet = {};
  @observable renderDataAgain = false
  constructor(props) {
    super(props);
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
          Sign In
        </Button>
      </Form>
    );
  };
  renderFormik() {
    return (
      <Formik
        initialValues={{ ...this.dataSet }}
        onSubmit={values => {
          const loginStatus = performLoginAction(values);
          if (!loginStatus) alert("Invalid username or password!");
          else this.props.history.push('/')
        }}
        validationSchema={SignInSchemaGenerator}
        className="d-flex justify-content-center text-white w-100 mx-auto"
      >
        {({ errors, touched, handleChange }) => {
          return this.renderFormComponents({ errors, touched, handleChange });
        }}
      </Formik>
    )
  }
  render() {
    this.generateInitialValues();
    return (
      <>
        {!isLoggedIn() && (<div className="form-background w-100 d-flex justify-content-center">
          {this.renderFormik()}
        </div>)}
        {isLoggedIn() && (<div className="alert-danger">Already signed in!</div>)}
      </>
    );
  }
}
export default Signin;
export { Signin };

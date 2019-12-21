import React from "react";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { observable } from "mobx";
import SchemaGenerator from "src/dependencies/schemas";
import ControlList from "./ControlList.jsx";
import ControlCreator from "src/components/controlcreator";
import { Link } from "react-router-dom";

@observer
class Signin extends React.Component {
  @observable dataSet = {};
  generateInitialValues() {
    ControlList.map(data => {
      this.dataSet[data.name] = data.value;
    });
  }
  render() {
    this.generateInitialValues();
    return (
      <Formik
        initialValues={{ ...this.dataSet }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SchemaGenerator}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
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
        }}
      </Formik>
    );
  }
}

export default Signin;
export { Signin };

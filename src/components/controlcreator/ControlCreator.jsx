import React from "react";
import { Form, Field } from "formik";
class ControlCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  renderControls = () => {
    const { ControlList, errors, touched, handleChange } = this.props;
    return ControlList.map(data => {
      const { name, type, placeHolder, label, disabled, value } = data;
      return (
        <React.Fragment key={name}>
          {/* {label && <Form.Label>{label}</Form.Label>} */}
          <Field
            onChange={handleChange}
            type={type}
            placeholder={placeHolder}
            name={name}
            className="form-control"
          />
          {errors[name] && touched[name] ? (
            <div className="alert-danger">{errors[name]}</div>
          ) : null}
        </React.Fragment>
      );
    });
  };
  render() {
    return this.renderControls();
  }
}

export default ControlCreator;
export { ControlCreator };

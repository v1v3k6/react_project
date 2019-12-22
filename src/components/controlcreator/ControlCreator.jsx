import React from "react";
import { Field } from "formik";
import { Form } from "react-bootstrap";
class ControlCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  renderControls = () => {
    const { ControlList, errors, touched, handleChange } = this.props;
    return ControlList.map(data => {
      const { name, type, placeHolder, label, disabled, value } = data;
      return (
        <div className="p-2 rounded" key={label}>
          {label && <Form.Label>{label}</Form.Label>}
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
        </div>
      );
    });
  };
  render() {
    return this.renderControls();
  }
}

export default ControlCreator;
export { ControlCreator };

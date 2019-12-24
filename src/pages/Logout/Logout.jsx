import React from "react";
import Home from "src/pages/Home";
import {
  performLogoutAction,
  loginData
} from "src/dependencies/loginvalidator";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Logout extends React.Component {
  @observable loginStatus;
  constructor(props) {
    super(props);
    this.loginStatus = loginData();
  }
  render() {
    if (this.loginStatus) {
      performLogoutAction();
      this.props.history.push('/signin')
      return <>Logged out!</>;
    }
    return null;
  }
}

export default Logout;
export { Logout };

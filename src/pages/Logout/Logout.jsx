import React from "react";
import Signin from "src/pages/Signin";
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
      return <Signin />;
    }
    return null;
  }
}

export default Logout;
export { Logout };

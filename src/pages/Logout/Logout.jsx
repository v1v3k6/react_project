import React from "react";
import {
  isLoggedIn,
  performLogoutAction
} from "src/dependencies/loginvalidator";
class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { checkPageUpdate } = this.props
    if (isLoggedIn()) {
      performLogoutAction({ checkPageUpdate });
      this.props.history.push('/signin')
      return <>Logged out!</>;
    }
    return null;
  }
}

export default Logout;
export { Logout };

import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
import CustomRouter from "src/dependencies/customrouter";
import {TopOptionGenerator, ExtraPages} from "src/dependencies/topoptions";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { isLoggedIn } from "src/dependencies/loginvalidator";
import './styles.scss'

@observer
class ContentManagement extends React.Component {
  @observable hasLoggedIn = false;
  @observable hasStarted = true;
  constructor(props) {
    super(props);
  }
  userHasLoggedIn(data) {
    this.hasLoggedIn = data;
  }
  initialLoaderCheck(hasStarted) {
    this.hasStarted = hasStarted;
  }
  render() {
    console.log("isLoggedIn(): ",isLoggedIn())
    return (
      <>
        <Router className="d-flex justify-content-start w-100 parent-container">
          <Header
            TopOptionGenerator={TopOptionGenerator}
            isLoggedIn={isLoggedIn()}
          />
          {/* {this.hasStarted && <Redirect to="/home" />} */}
          <CustomRouter
            MenuOptions = {TopOptionGenerator({ userHasLoggedIn: this.hasLoggedIn })}
            userHasLoggedIn={this.userHasLoggedIn.bind(this)}
            ExtraPages={ExtraPages()}
            initialLoaderCheck={this.initialLoaderCheck.bind(this)}
          />
          <Footer />
        </Router>
      </>
    );
  }
}

export default ContentManagement;
export { ContentManagement };

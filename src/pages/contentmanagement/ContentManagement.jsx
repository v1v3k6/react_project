import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
import CustomRouter from "src/dependencies/customrouter";
import TopOptionGenerator from "src/dependencies/topoptions";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

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
    return (
      <>
        <Router className="d-flex justify-content-start w-100">
          <Header
            TopOptionGenerator={TopOptionGenerator}
            userHasLoggedIn={this.userHasLoggedIn.bind(this)}
          />
          {this.hasStarted && <Redirect to="/Home" />}
          <CustomRouter
            {...TopOptionGenerator({
              userHasLoggedIn: this.userHasLoggedIn.bind(this)
            })}
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

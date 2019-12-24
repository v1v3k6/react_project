import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { observer } from "mobx-react";
import { observable } from "mobx";
import CustomRouter from "src/dependencies/customrouter";
import { TopOptionGenerator, ExtraPages } from "src/dependencies/topoptions";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { isLoggedIn } from "src/dependencies/loginvalidator";
import "./styles.scss";

@observer
class ContentManagement extends React.Component {
  @observable hasLoggedIn = false;
  @observable hasPageUpdated = false;
  constructor(props) {
    super(props);
  }
  userHasLoggedIn(data) {
    this.hasLoggedIn = data;
  }
  checkPageUpdate(hasPageUpdated) {
    this.hasPageUpdated = hasPageUpdated;
  }
  render() {
    return (
      <Router className="d-flex justify-content-center w-100 parent-container">
        <Header
          TopOptionGenerator={TopOptionGenerator}
          isLoggedIn={isLoggedIn()}
        />
        <div className="d-none">{this.hasPageUpdated}</div>
        <CustomRouter
          MenuOptions={TopOptionGenerator({
            userHasLoggedIn: this.hasLoggedIn
          })}
          userHasLoggedIn={this.userHasLoggedIn.bind(this)}
          ExtraPages={ExtraPages()}
          checkPageUpdate={this.checkPageUpdate.bind(this)}
        />
        <Footer />
      </Router>
    );
  }
}

export default ContentManagement;
export { ContentManagement };

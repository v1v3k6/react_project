import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
import CustomRouter from "src/dependencies/customrouter";
import TopOptionGenerator from "src/dependencies/topoptions";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

@observer
class ContentManagement extends React.Component {
  @observable hasLoggedIn = false;
  constructor(props) {
    super(props);
  }
  userHasLoggedIn(data) {
    console.log(data);
    this.hasLoggedIn = data;
  }
  render() {
    return (
      <>
        <Router className="d-flex justify-content-start w-100">
          <Header
            TopOptionGenerator={TopOptionGenerator}
            userHasLoggedIn={this.userHasLoggedIn.bind(this)}
          />
          <CustomRouter
            {...TopOptionGenerator({
              userHasLoggedIn: this.userHasLoggedIn.bind(this)
            })}
          />
          <Footer />
        </Router>
      </>
    );
  }
}

export default ContentManagement;
export { ContentManagement };

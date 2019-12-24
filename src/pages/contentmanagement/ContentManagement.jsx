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
  @observable cartValue={}
  constructor(props) {
    super(props);
  }
  userHasLoggedIn(data) {
    this.hasLoggedIn = data;
  }
  checkPageUpdate(hasPageUpdated) {
    this.hasPageUpdated = hasPageUpdated;
  }
  updateCartValue(hotel,item,value){
    if(!this.cartValue[hotel])
      this.cartValue[hotel]={}
    if(!isNaN(this.cartValue[hotel][item]))
      this.cartValue[hotel][item]+=value
    else
      this.cartValue[hotel][item]=value

    if(!isNaN(this.cartValue.total))
      this.cartValue.total+=value
    else
      this.cartValue.total=value
    if(this.cartValue.total<0 || this.cartValue[hotel][item]<0){
      this.cartValue.total=0
      this.cartValue[hotel][item]=0
    }
    console.log(JSON.parse(JSON.stringify(this.cartValue)))
  }
  render() {
    return (
      <Router className="d-flex justify-content-center w-100 parent-container">
        <Header
          TopOptionGenerator={TopOptionGenerator}
          isLoggedIn={isLoggedIn()}
          cartValue={this.cartValue.total?this.cartValue.total:0}
        />
        <div className="d-none">{this.hasPageUpdated}</div>
        <CustomRouter
          MenuOptions={TopOptionGenerator({
            userHasLoggedIn: this.hasLoggedIn
          })}
          userHasLoggedIn={this.userHasLoggedIn.bind(this)}
          ExtraPages={ExtraPages()}
          checkPageUpdate={this.checkPageUpdate.bind(this)}
          updateCartValue={this.updateCartValue.bind(this)}
          cartValue={this.cartValue.total?this.cartValue.total:0}
        />
        <Footer />
      </Router>
    );
  }
}

export default ContentManagement;
export { ContentManagement };

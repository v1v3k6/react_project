import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { observer } from "mobx-react";
import { observable } from "mobx";
import CustomRouter from "src/dependencies/customrouter";
import { TopOptionGenerator, ExtraPages } from "src/dependencies/topoptions";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { isLoggedIn } from "src/dependencies/loginvalidator";
import { addToCart, removeFromCart } from 'src/dependencies/addtocart'
import "./styles.scss";

@observer
class ContentManagement extends React.Component {
  @observable hasLoggedIn = false;
  @observable hasPageUpdated = false;
  @observable cartValue = {
    hotel: {
      name: "",
      totalQuantity: 0,
      totalPrice: 0,
      items: {}
    }
  }
  constructor(props) {
    super(props);
  }
  userHasLoggedIn(data) {
    this.hasLoggedIn = data;
  }
  checkPageUpdate(hasPageUpdated) {
    this.hasPageUpdated = hasPageUpdated;
  }
  updateCartValue(itemData, value) {
    const { name, hotelName, price, image } = itemData

    if (!this.cartValue.hotel.name || this.cartValue.hotel.name === "")
      this.cartValue.hotel.name = hotelName

    if (this.cartValue.hotel.name === hotelName) {
      if (value == -1)
        this.cartValue.hotel.items = removeFromCart({ name, image, price }, this.cartValue.hotel)
      else
        this.cartValue.hotel.items = addToCart({ name, image, price }, this.cartValue.hotel)
    }
    console.log("cartData: ", JSON.parse(JSON.stringify(this.cartValue)))
  }
  render() {
    return (
      <Router className="d-flex justify-content-center w-100 parent-container">
        <Header
          TopOptionGenerator={TopOptionGenerator}
          isLoggedIn={isLoggedIn()}
          cartValue={this.cartValue.hotel.totalQuantity}
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
          cartValue={this.cartValue}
        />
        <Footer />
      </Router>
    );
  }
}

export default ContentManagement;
export { ContentManagement };

import React from "react";
import { IoIosBasket as Logo } from "react-icons/io";
import CustomLinker from "src/dependencies/customlinker";
import "./styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPageLogo = () => {
    return <Logo size={40} />;
  };
  generateHeaderRibbon = () => {
    const { TopOptionGenerator, userHasLoggedIn } = this.props;
    return (
      <div className="header-parent d-flex justify-content-between row align-items-center w-100 mx-auto">
        <div className="ml-4 d-flex justify-content-center">
          {this.renderPageLogo()}
        </div>
        <div className="d-flex justify-content-between mr-4">
          <CustomLinker
            {...TopOptionGenerator({ userHasLoggedIn: userHasLoggedIn })}
          />
        </div>
      </div>
    );
  };
  render() {
    return <>{this.generateHeaderRibbon()}</>;
  }
}

export default Header;
export { Header };

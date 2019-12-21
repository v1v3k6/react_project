import React from 'react'
import { IoIosBasket as Logo } from 'react-icons/io';
import {
    BrowserRouter as Router
  } from "react-router-dom";
import CustomRouter from 'src/dependencies/customrouter'
import CustomLinker from 'src/dependencies/customlinker'
import './styles.scss'

const topOptions=["home", "signin", "signup"]

class Header extends React.Component{
    renderPageLogo = () => {
        return <Logo size={40} />
    }
    generateHeaderRibbon = () => {
        return (
            <div className="header-parent d-flex justify-content-between row align-items-center w-100 mx-auto">
                <div className="ml-4 d-flex justify-content-center">{this.renderPageLogo()}</div>
                <div className="d-flex justify-content-between mr-4">
                    <Router>
                        <CustomRouter {...topOptions} />
                        <CustomLinker {...topOptions} />
                    </Router>
                </div>
            </div>
        )
    }
    render(){
        return (
            <>{this.generateHeaderRibbon()}</>
        )
    }
}

export default Header
export { Header }
import React from 'react'
import { IoIosBasket as Logo } from 'react-icons/io';
import CustomLinker from 'src/dependencies/customlinker'
import topOptions from 'src/dependencies/topoptions'
import './styles.scss'

class Header extends React.Component{
    renderPageLogo = () => {
        return <Logo size={40} />
    }
    generateHeaderRibbon = () => {
        return (
            <div className="header-parent d-flex justify-content-between row align-items-center w-100 mx-auto">
                <div className="ml-4 d-flex justify-content-center">{this.renderPageLogo()}</div>
                <div className="d-flex justify-content-between mr-4">
                    <CustomLinker {...topOptions} />
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
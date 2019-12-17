import React from 'react'
import RenderTopOptionSet from 'src/Components/TopOptions'
import { IoIosBasket as Logo } from 'react-icons/io';
import './index.scss'

class Header extends React.Component{
    renderPageLogo = () => {
        return <Logo size={40} />
    }
    generateHeaderRibbon = () => {
        return (
            <div className="header-parent d-flex justify-content-between row align-items-center w-100 mx-auto">
                <div className="ml-4 d-flex justify-content-center">{this.renderPageLogo()}</div>
                <div className="d-flex justify-content-between mr-4"><RenderTopOptionSet /></div>
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
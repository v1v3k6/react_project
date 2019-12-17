import React from 'react'
import RenderTopOptionSet from 'src/Components/TopOptions'
import './index.scss'

class Header extends React.Component{
    renderPageLogo = () => {
        return <>This is where the logo goes!</>
    }
    generateHeaderRibbon = () => {
        return (
            <div className="header-parent d-flex">
                <div>{this.renderPageLogo()}</div>
                <div><RenderTopOptionSet /></div>
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
export { H
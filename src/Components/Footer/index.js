import React from 'react'
import RenderTopOptionSet from 'src/Components/TopOptions'
import { IoIosBasket as Logo } from 'react-icons/io';
import './index.scss'

class Footer extends React.Component{
    renderPageLogo = () => {
        return <Logo />
    }
    generateFooterRibbon = () => {
        return (
            <div className="footer-parent d-flex justify-content-between w-100 mx-auto">
                Footer Content
            </div>
        )
    }
    render(){
        return (
            <>{this.generateFooterRibbon()}</>
        )
    }
}

export default Footer
export { Footer }
import React from 'react'
import './styles.scss'

class Footer extends React.Component{
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
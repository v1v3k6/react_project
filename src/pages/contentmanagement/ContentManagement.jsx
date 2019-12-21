import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CustomRouter from 'src/dependencies/customrouter'
import topOptions from 'src/dependencies/topoptions'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
class ContentManagement extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Router>
                <Header />
                <CustomRouter {...topOptions} />
                <Footer />
            </Router>
            </>
        )
    }
}

export default ContentManagement
export {ContentManagement}
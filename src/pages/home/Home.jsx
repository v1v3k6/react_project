import React from 'react'
import ContentManagement from 'src/pages/contentmanagement'
import Header from 'src/components/header'
import Footer from 'src/components/footer'
class Home extends React.Component{
    render(){
        return(
            <>
                <Header />
                <ContentManagement />
                <Footer />
            </>
        )
    }
}

export default Home
export {Home}
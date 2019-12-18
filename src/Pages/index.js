import React from 'react'
import Header from 'src/Components/Header'
import Footer from 'src/Components/Footer'
import Hotels from './hlp'

 class Template extends React.Component{
     render(){
         return (
             <>
                <Header />
                <Hotels />
                <Footer />
             </>
         )
     }
 }

 export default Template
 export { Template }
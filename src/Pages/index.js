import React from 'react'
import Header from 'src/Components/Header'
import Footer from 'src/Components/Footer'

 class Template extends React.Component{
     render(){
         return (
             <>
                <Header />
                <Footer />
             </>
         )
     }
 }

 export default Template
 export { Template }
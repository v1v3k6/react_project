import React from 'react'
import Header from 'src/Components/Header'
import Body from 'src/Components/Body'

 class Template extends React.Component{
     render(){
         return (
             <>
                <Header />
                <Body />
             </>
         )
     }
 }

 export default Template
 export { Template }
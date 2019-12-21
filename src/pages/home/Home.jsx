import React from 'react'
import CreateCard from 'src/components/cards'
import dataObject from 'lds/hotel_data'

 class Home extends React.Component{
     render(){
         return (
             <>
                {dataObject.hotels.map((data,index) => {
                    console.log("data: ", data)
                    return (
                        <div key={index}>
                            <CreateCard {...{name: data.name, type: data.type, image: data.image, key: data.name+'_'+index}} />
                        </div>
                    )
                })}
             </>
         )
     }
 }

 export default Home
 export { Home }
import React from 'react'
import renderCards from 'src/Components/RenderCards'
import dataObject from 'lds/hotel_data'

 class Hotels extends React.Component{
     render(){
         return (
             <>
                {dataObject.hotels.map((data,index) => {
                    console.log("data: ", data)
                    return (
                        <div key={index}>
                            {renderCards({name: data.name, type: data.type, image: data.image, key: data.name+'_'+index})}
                        </div>
                    )
                })}
             </>
         )
     }
 }

 export default Hotels
 export { Hotels }
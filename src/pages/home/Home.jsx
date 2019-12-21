import React from 'react'
import CreateCard from 'src/components/cards'
import dataObject from 'lds/hotel_data'
import './styles.scss'

 class Home extends React.Component{
     render(){
         return (
             <div className="d-flex justify-content-start flex-wrap">
                {dataObject.hotels.map((data,index) => {
                    return (
                        <div className="card mt-1 ml-1 card-dark rounded card-parent" key={index}>
                            <CreateCard {...{name: data.name, type: data.type, image: data.image, key: data.name+'_'+index, isFood: false}} />
                        </div>
                    )
                })}
             </div>
         )
     }
 }

 export default Home
 export { Home }
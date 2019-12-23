import React from  'react'
import PageNotFound from 'src/pages/PageNotFound'
import CreateCard from "src/components/cards";
import dataObject from "lds/hotel_data";
import "./styles.scss";
class Foodlist extends React.Component{
    constructor(props){
        super(props)
    }
    getHotelData = (id) => {
        return (
            
            <div key={id} className="d-flex justify-content-start flex-wrap w-100">
        {dataObject.hotels[id].dishes.map((data, index)=>{
            return (
                <div
              to={`/foodlist/?id=${data.id}`}
              className="card mt-1 ml-1 card-dark rounded card-parent"
              key={index}
            >
                <CreateCard
                {...{
                  name: data.name,
                  type: data.type,
                  image: data.image,
                  key: data.name + "_" + index,
                  price:data.price,
                  description:data.description,
                  isFood: true
                }}
              />
              </div>
            )
        })}
              </div>)
    }
    render(){
        const urlParams = new URLSearchParams(location.search);
        if(urlParams.has("id") && !isNaN(urlParams.get("id"))){
        return (
            <div>
                {this.getHotelData(parseInt(urlParams.get("id"))-1)}
            </div>
        )
    }
    return <PageNotFound />
    }
}

export default Foodlist
export {Foodlist}
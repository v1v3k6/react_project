import React from 'react'
import CreateCard from "src/components/cards"
import dataObject from "lds/hotel_data"
import PageNotFound from 'src/pages/PageNotFound'
import "./styles.scss";

class Foodlist extends React.Component {
    constructor(props) {
        super(props)
    }
    getHotelData = () => {
        if (isNaN(this.props.match.params.id))
            return <PageNotFound />
        const id = parseInt(this.props.match.params.id) - 1
        const {updateCartValue} = this.props
        return (
            <div key={id} className="d-flex justify-content-start flex-wrap w-100">
                {dataObject.hotels[id].dishes.map((data, index) => {
                    return (
                        <div
                            to={`/foodlist/?id=${data.id}`}
                            className="card mt-1 ml-1 card-dark rounded card-parent"
                            key={index}
                        >
                            <CreateCard
                                {...{
                                    name: data.name,
                                    id: id,
                                    type: data.type,
                                    image: data.image,
                                    key: data.name + "_" + index,
                                    price: data.price,
                                    description: data.description,
                                    updateCartValue: updateCartValue,
                                    isFood: true,
                                    hotelName: dataObject.hotels[id].name
                                }}
                            />
                        </div>
                    )
                })}
            </div>)
    }
    render() {
        return (
            <div>
                {this.getHotelData()}
            </div>
        )
    }
}

export default Foodlist
export { Foodlist }
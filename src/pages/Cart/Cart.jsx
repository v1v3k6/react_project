import React from 'react'
import './styles.scss'
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    renderCartData(cartData) {
        Object.keys(cartData).map((data, index)=>{
            console.log(data," : ",index)
        })
        return <>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                </div>
                <div className="item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                    <span className="like-btn"></span>
                </div>
 
                <div className="image">
                    <img src={cartData.hotel.image} alt="" />
                </div>
 
                <div className="description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                </div>
 
                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        <img src="plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" />
                    <button className="minus-btn" type="button" name="button">
                        <img src="minus.svg" alt="" />
                    </button>
                </div>
 
                <div className="total-price">$549</div>
            </div>
 
            <div className="total-price">$349</div>
        </div>
    </>
    }
    render() {
        const { cartValue } = this.props
        console.log("cartValue: ", JSON.parse(JSON.stringify(cartValue)))
        return (
            <>
                {cartValue.hotel.totalQuantity > 0 ? this.renderCartData(cartValue) : <div>Ooopsss! Your cart is empty!</div>}
            </>
        )
    }
}
export default Cart
export { Cart }
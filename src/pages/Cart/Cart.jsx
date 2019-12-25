import React from 'react'
import { Button } from 'react-bootstrap'
import './styles.scss'
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    generateItemList = (cartValue) => {
        const { updateCartValue } = this.props
        return Object.keys(cartValue.hotel.items).map((data, index) => {
            return (
                <div className="d-flex justify-content-start w-100 shadow mt-2 flex-wrap align-middle" key={`${data}_${index}`}>
                    <div className="product-data d-flex justify-content-around w-50">
                        <div key={`${index}_name`} className="item-name w-25 align-middle">{data}</div>
                        <div key={`${index}_price`} className="item-price w-25">{cartValue.hotel.items[data].price}</div>
                        <div key={`${index}_quantity`} className="item-quantity-control d-flex w-25 p-2">
                            <Button onClick={() => { updateCartValue({ name: data, hotelName: cartValue.hotel.name, price: cartValue.hotel.items[data].price }, 1) }}>+</Button>
                            <div className="item-quantity-text">{cartValue.hotel.items[data].quantity}</div>
                            <Button onClick={() => { updateCartValue({ name: data, hotelName: cartValue.hotel.name, price: cartValue.hotel.items[data].price }, -1) }}>-</Button>
                        </div>
                    </div>
                    <div className="product-price-final w-50 text-center">
                        {cartValue.hotel.items[data].price * cartValue.hotel.items[data].quantity}
                    </div>
                </div>
            )
        })
    }
    renderCartData() {
        const { cartValue } = this.props
        return (
            <>
                <div className="shopping-cart w-100 d-flex justify-content-center flex-wrap">
                    <div className="title w-100 d-flex justify-content-center">Your Cart</div>
                    <div className="cart-container-parent w-100 d-flex justify-content-center flex-wrap">
                        {this.generateItemList(cartValue)}
                    </div>
                    <div className="totalValue d-flex justify-content-center flex-wrap w-100 mt-2">
                        <div className="totalValueText w-50 text-left">Total Value</div>
                        <div className="totalValuePrice w-50 text-center">{cartValue.hotel.totalPrice}</div>
                    </div>
                    <Button onClick={() => {
                        alert("Hi! This feature is yet to be implemented!!")
                    }} className="w-100 btn btn-success mt-2">Proceed To Checkout</Button>
                </div>
            </>
        )
    }
    render() {
        const { cartValue } = this.props
        return (
            <>
                {cartValue.hotel.totalQuantity > 0 ? this.renderCartData() : <div>Ooopsss! Your cart is empty!</div>}
            </>
        )
    }
}
export default Cart
export { Cart }
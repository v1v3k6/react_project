import React from 'react'
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    renderCartData(cartData) {
        return <>Your items!</>
    }
    render() {
        const { cartValue } = this.props
        console.log("cartValue: ", JSON.parse(JSON.stringify(cartValue)))
        return (
            <>
                {cartValue.totalQuantity > 0 ? this.renderCartData(cartData) : <div>Ooopsss! Your cart is empty!</div>}
            </>
        )
    }
}
export default Cart
export { Cart }
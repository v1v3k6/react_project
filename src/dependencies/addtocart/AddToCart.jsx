const addToCart = (itemData, cartData) => {
  const finalData = Object.keys(cartData.items).length >= 0 ? itemData : {}
  if (!cartData.items[finalData.name]) {
    cartData.items[finalData.name] = {
      quantity: 1,
      price: finalData.price
    }
    cartData.totalPrice += finalData.price
    cartData.totalQuantity += 1
  }
  else {
    cartData.items[finalData.name].quantity += 1
    cartData.totalPrice += finalData.price
    cartData.totalQuantity += 1
  }
  return cartData.items
}

const removeFromCart = (itemData, cartData) => {
  const finalData = Object.keys(cartData.items).length > 0 ? itemData : {}
  if (cartData.items[finalData.name]) {
    if (cartData.items[finalData.name].quantity > 0) {
      cartData.items[finalData.name].quantity -= 1
      cartData.totalPrice -= finalData.price
      cartData.totalQuantity -= 1
    }
    if (cartData.items[finalData.name].quantity <= 0)
      delete cartData.items[finalData.name]
  }
  return cartData.items
}

export default addToCart;
export { addToCart, removeFromCart };

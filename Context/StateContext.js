import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

const Context = createContext()
const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id)
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== product._id)
    )
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )
  }

  const onAdd = (product, quantity) => {
    const productInCart = cartItems.find((item) => item._id === product._id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
    if (productInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
      })
      setCartItems(updateCartItems)
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, product])
    }
    toast.success(`${quantity} ${product.name} added to the Cart`)
  }
  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id)
    const newCartItem = cartItems.filter((item) => item._id !== id)

    if (value === 'inc') {
      setCartItems([
        ...newCartItem,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ])
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItem,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ])
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }
  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }
  const decQty = () => {
    setQty((prevQty) => {
      return prevQty > 1 ? prevQty - 1 : prevQty
    })
  }
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
export default StateContext

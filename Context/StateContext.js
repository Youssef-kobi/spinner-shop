import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Context = createContext()
const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)
  const [cartItems, setCartItems] = useState([])

  // On client side, check local storage and update state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localCartItems = window.localStorage.getItem('cartItems')
      if (localCartItems) {
        setCartItems(JSON.parse(localCartItems))
        setTotalPrice(
          JSON.parse(localCartItems).reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
          )
        )
        setTotalQuantities(
          JSON.parse(localCartItems).reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
          )
        )
      }
    }
  }, [])

  // Any time cartItems changes, update local storage
  useEffect(() => {
    if (typeof window !== 'undefined' && cartItems.length !== 0) {
      window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems])
  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item.id === product.id)
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    )
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )
  }
  const onEmptyCart = () => {
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    setQty(1)
    window.localStorage.removeItem('cartItems')
  }

  const onAdd = (product, quantity) => {
    const productInCart = cartItems.find((item) => item.id === product.id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
    if (productInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
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
    const foundProduct = cartItems.find((item) => item.id === id)
    const newCartItem = cartItems.filter((item) => item.id !== id)

    if (value === 'inc') {
      console.log(foundProduct)
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
        onEmptyCart,
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

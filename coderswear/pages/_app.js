import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    console.log("hey i am in useeffect from _app.js")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear();
    }
  }, [])


  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart)
    console.log("check what's there in new cart: ", newCart)
    saveCart(newCart)
    console.log("items in cart has been added.... from _app.js")
  }
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subT = 0;
    let key = Object.keys(myCart);

    for(let i =0; i<key.length; i++){
      subT += (myCart[key[i]].qty * myCart[key[i]].price)
    }

    setSubTotal(subT);
    console.log("cart is saved..... from _app.js")
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
    console.log("cart is creared.")
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty -= qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
    console.log("item form cart is removed..... from _app.js")
  }

  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} removeFromCart = {removeFromCart} clearCart = {clearCart} saveCart = {saveCart} subTotal = {subTotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart = {removeFromCart} clearCart = {clearCart} saveCart = {saveCart} subTotal = {subTotal} {...pageProps} />
      <Footer />
    </>)

}

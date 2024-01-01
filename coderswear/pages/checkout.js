import React from 'react'
import Link from 'next/link'
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
function Checkout({ cart, addToCart, removeFromCart, clearCart, subTotal, saveCart }) {
  return (
    <div className='container m-auto px-28'>
      <h1 className='fond-bold text-3xl my-8 text-center'>Chcekout</h1>
      <h2>1. Delivery Details</h2>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600">phone</label>
            <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label for="state" class="leading-7 text-sm text-gray-600">state</label>
            <input type="state" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label for="state" class="leading-7 text-sm text-gray-600">state</label>
            <input type="state" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label for="pincode" class="leading-7 text-sm text-gray-600">pincode</label>
            <input type="pincode" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <div class="mb-4">
          <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
          <textarea cols="30" rows="3" id="address" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>

      {/* <div className="flex">
        <Link href={'/checkout'}><button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-no ne hover:bg-pink-600 rounded text-lg">Checkout</button></Link>
        <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded text-lg">Back</button>
      </div> */}

      <h2>
        Review cart item and pay:
      </h2>
      <div className="sideCart bg-pink-200 p-6 my-4">
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 &&
            <div className='m-8 text-center text-sm'>
              No items in the cart.
            </div>
          }
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-2">
                <div className='w-2/3'>{cart[k].name}</div>
                <div className="w-1/3 flex items-center justify-center space-x-2">
                  <span><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer' /></span>
                  <span>{cart[k].qty}</span>
                  <span><AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer' /></span>
                </div>
              </div>
            </li>
          })}
        </ol>
        <span>subtotal: {subTotal}</span>
      </div>
      <Link href={'/order'}>
      <button className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm'>pay ₹{subTotal}</button>
      </Link>
    </div>
  )
}

export default Checkout
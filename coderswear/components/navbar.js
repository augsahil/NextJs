import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useRef } from 'react';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal, saveCart }) => {
    console.log(cart, addToCart, removeFromCart, clearCart, subTotal, saveCart);
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        } else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }
    const ref = useRef()
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white z-10'>
            <div className='logo mx-5'>
                <Link href={'/'}>
                    <Image width={200} height={40} src="/logo.png" alt="" />
                </Link>
            </div>
            <div className='nav'>
                <ul className='flex items-center space-x-5 font-bold'>
                    <Link href={'/tshirts'}><li>Tshirt</li></Link>
                    <Link href={'/hoodies'}><li>Hoodies</li></Link>
                    <Link href={'/stickers'}><li>Stickers</li></Link>
                    <Link href={'/mugs'}><li>Mugs</li></Link>
                </ul>
            </div>

            <div  className='flex cart absolute right-0 top-5 mx-5 space-x-2'>
                <Link href={'/login'}><FaUserCircle className='cursor-pointer text-2xl md:text-2xl mx-2' /></Link>
                <AiOutlineShoppingCart onClick={toggleCart} className='cursor-pointer text-2xl md:text-2xl mx-2' />
            </div>

            <div ref={ref} className={`sideCart w-68 h-[100vh] absolute top-0 right-0 px-5 py-10 bg-pink-200 transform transition-transform ${Object.keys(cart).length !== 0? 'translate-x-0' : 'translate-x-full'}`}>
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-5 right-3 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>

                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length == 0 &&
                        <div className='m-8 text-center text-sm'>
                            No items in the cart.
                        </div>
                    }
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                            <div className="item flex my-2">
                                <div className='w-2/3 bg-red-500'>{cart[k].name}</div>
                                <div className="w-1/3 bg-green-700 flex items-center justify-center space-x-2">
                                    <span><AiOutlineMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer'/></span>
                                    <span>{cart[k].qty}</span>
                                    <span><AiOutlinePlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer'/></span>
                                </div>
                            </div>
                        </li>
                    })}

                    {/* <li>
                        <div className="item flex my-2">
                            <div className='w-2/3 bg-red-500'>Tshirt- latest fashion</div>
                            <div className="w-1/3 bg-green-700 flex items-center justify-center space-x-2">
                                <span><AiOutlineMinusCircle /></span>
                                <span>1</span>
                                <span><AiOutlinePlusCircle /></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-2">
                            <div className='w-2/3 bg-red-500'>Tshirt- latest fashion</div>
                            <div className="w-1/3 bg-green-700 flex items-center justify-center space-x-2">
                                <span><AiOutlineMinusCircle /></span>
                                <span>1</span>
                                <span><AiOutlinePlusCircle /></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-2">
                            <div className='w-2/3 bg-red-500'>Tshirt- latest fashion</div>
                            <div className="w-1/3 bg-green-700 flex items-center justify-center space-x-2">
                                <span><AiOutlineMinusCircle /></span>
                                <span>1</span>
                                <span><AiOutlinePlusCircle /></span>
                            </div>
                        </div>
                    </li> */}
                </ol>
                {Object.keys(cart).length > 0 &&
                <div className="flex">
                    <Link href={'/checkout'}><button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-no ne hover:bg-pink-600 rounded text-lg">Checkout</button></Link>
                    <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded text-lg">Clear Cart</button>
                </div>
                }
            </div>

        </div>
    )
}

export default Navbar 
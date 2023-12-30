import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
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
            <div className='cart absolute right-0 top-5 mx-5'>
                <button className='text-2xl'><AiOutlineShoppingCart /></button>
            </div>

        </div>
    )
}

export default Navbar 
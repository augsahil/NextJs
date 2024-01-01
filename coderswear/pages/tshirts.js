import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '@/models/Product'

function Tshirts({ products }) {
  // console.log("products are: ", products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-20 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).map((item) => {
              return <div key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4 shadow-slate-400">
                <Link href={`/product/${products[item].slug}`} className="block rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto h-[24vh] block" src={products[item].img} />
                </Link>
                <div className="mt-4 px-10">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">{products[item].price}</p>
                  {/* <p className="mt-1">{products[item].size}</p> */}
                  <div className="mt-1">
                    {products[item].size.includes('S') && <span className='border border-gray-500 px-1 mx-1'>S</span>}
                    {products[item].size.includes('M') && <span className='border border-gray-500 px-1 mx-1'>M</span>}
                    {products[item].size.includes('L') && <span className='border border-gray-500 px-1 mx-1'>L</span>}
                    {products[item].size.includes('XL') && <span className='border border-gray-500 px-1 mx-1'>XL</span>}
                    {products[item].size.includes('XXL') && <span className='border border-gray-500 px-1 mx-1'>XXL</span>}
                  </div>
                  <div className="mt-1">
                    {products[item].color.includes('Red') && <span className='border border-gray-500 px-1 mx-1'>Red</span>}
                    {products[item].color.includes('Green') && <span className='border border-gray-500 px-1 mx-1'>Green</span>}
                    {products[item].color.includes('Black') && <span className='border border-gray-500 px-1 mx-1'>Black</span>}
                  </div>
                </div>
              </div>
            })}
            {/* <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({category: 'tshirt'});

  let tshirts = {}
    for(let item of products){
        if(item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color) && item.availability > 0){
                tshirts[item.title].color.push(item.color)
            }
            if(!tshirts[item.title].size.includes(item.size) && item.availability > 0){
                tshirts[item.title].size.push(item.size)
            }
        }else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availability > 0){
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }
        }
    }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }
  }
}

export default Tshirts
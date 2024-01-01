import React from 'react'

function Order() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Codes Wear</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
            
            <div className="flex justify-between border-t border-gray-200 py-2">
              <span className="w-1/3 text-gray-500">Item Description</span>
              <span className="w-1/3 text-center text-gray-500">Quantity</span>
              <span className="w-1/3 text-center text-gray-500">Item Total</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 py-2">
              <span className="w-1/3 text-gray-500">Tshirt:red latest fashion</span>
              <span className="w-1/3 text-center text-gray-500">1</span>
              <span className="w-1/3 text-center text-gray-900">₹499</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 py-2">
              <span className="w-1/3 text-gray-500">Tshirt:black latest fashion</span>
              <span className="w-1/3 text-center text-gray-500">1</span>
              <span className="w-1/3 text-center text-gray-900">₹499</span>
            </div>
            <div className="flex justify-between border-t border-b mb-6 border-gray-200 py-2">
              <span className="w-1/3 text-gray-500">Tshirt:green latest fashion</span>
              <span className="w-1/3 text-center text-gray-500">1</span>
              <span className="w-1/3 text-center text-gray-900">₹499</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹4998.00</span>
              <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Trach Order</button>
              
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export default Order
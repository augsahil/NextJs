// import React from 'react'
// import Link from 'next/link'
// import { useState } from 'react'

// function Signup() {
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const handleChange= (e) =>{
//     if(e.target.name == 'name'){
//       setName(e.target.value)
//     }else if(e.target.name == 'email'){
//       setName(e.target.value)
//     }else if(e.target.name == 'password'){
//       setName(e.target.value)
//     }
//   }
//   const handleSubmit = async(e) =>{
//     e.preventDefault()//page will not reload whenever we submit the form.

//     const data = { name, email, password }
//     let res = await fetch('http://localhost:3000/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data),
//     })
//     let response = await res.JSON()
//     console.log(response)
//     setEmail('')
//     setName('')
//     setPassword('')
//   }
//   return (
//     <section class="bg-gray-50 dark:bg-gray-900">
//       <div class="flex flex-col items-center justify-center px-6 py-8">
//         <img class="w-24 h-20 mr-20" src="/favicon1.png" alt="logo" />
//         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Create new account
//             </h1>
//             <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
//                 <input value={name} onChange={handleChange} type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />

//               </div>
//               <div>
//                 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input value={email} onChange={handleChange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />

//               </div>
//               <div>
//                 <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input value={password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                 {/* <label for="password" class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
//                 <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" /> */}
//               </div>
//               <button type="submit" class="w-full text-black bg-pink-400 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Sign up</button>
//               <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Don’t have an account yet? <Link href={'/login'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Signup

import React, { useState } from "react";
import Link from "next/link";
// import Company from "../public/assets/nav.png";
import Image from "next/image";

const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password }

    let res = await fetch(`http://localhost:3000/api/signup`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)

    setName('')
    setEmail('')
    setPassword('')
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div class="flex flex-col items-center justify-center px-6 py-8">
            <img class="w-24  h-20 mr-20" src="/favicon1.png" alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign Up your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link
                href="/login"
                className="font-medium text-pink-600 hover:text-pink-500 mx-2">
                Login
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  value={name || ""}
                  onChange={handleChange}

                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  value={email || ""}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="flex">
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    value={password || ""}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>

                <div className="ml-auto">
                  <label htmlFor="re-password" className="sr-only">
                    Re-type Password
                  </label>
                  <input
                    id="re-type-password"
                    name="re-type-password"
                    type="password"
                    autoComplete="re-type-password"
                    required
                    className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                    placeholder="re-type Password"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
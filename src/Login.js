import React from 'react'

export default function Login() {
  return (
    <div className="flex flex-col w-10/12 md:w-6/12 lg:w-3/12 gap-y-6">
        
        <h1 className='text-lg text-blue-800 text-center font-bold'>Personal Inventory</h1>

        <div>
            <label for="first_name" class="block mb-2 font-medium text-gray-900">Username</label>
            <input type="text" id="first_name" class="border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="Example" required />
        </div>

        <div>
            <label for="first_name" class="block mb-2 font-medium text-gray-900">Password</label>
            <input type="text" id="first_name" class="border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required />
            <p className="text-sm text-right mt-1 cursor-pointer">Forgot Password?</p>
        </div>

        <button type="submit" class="text-white bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

        <p className='text-center'>Don't have an account? <span className='underline cursor-pointer text-blue-950'>Sign up here.</span></p>
    </div>
  )
}

import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up')

    const submitHandler = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="h-[1.5px] w-8 bg-gray-800" />
            </div>
            {
                currentState === 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required value="" onChange={() => { }} />
            }
            <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required value="" onChange={() => { }} />
            <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required value="" onChange={() => { }} />
            <div className="w-full flex justify-between text-sm sm:text-base -mt-2">
                <p className="cursor-pointer">Forgot your password?</p>
                {
                    currentState === 'Login' ?
                        <p className="cursor-pointer text-sm sm:text-base" onClick={() => setCurrentState('Sign Up')}>Create an account</p>
                        :
                        <p className="cursor-pointer text-sm sm:text-base" onClick={() => setCurrentState('Login')}>Login Here</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>
                {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    )
}

export default Login
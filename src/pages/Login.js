import React from 'react';
import Header from '../components/Header';


function Login() {
    return (
        <>
            <Header />
            <h1 className='text-slate-200 text-4xl self-start mb-5 text-center'>Login Below</h1>
            <form className='flex flex-col w-screen items-center mt-12 w-fit mx-auto' action='/login'>
                <input type="text" className='placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-6' placeholder='Email'/>
                <input type="password" className='placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-6' placeholder='Password'/>
                <button type="submit" className='rounded-md bg-[#E98500] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6E0088] focus:bg-[#6E0088] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E98500]'>Login</button>
            </form>
            <div className='flex flex-row justify-center'>
                <div className='flex justify-center my-5 mx-5'>
                    <a href="/" className="flex items-center justify-center text-slate-800 bg-white rounded-full w-48 py-2">
                        <img src="/images/google-logo.svg" className="w-6 h-6 mr-2" alt="Google Logo"/>
                        <p className="text-sm">Sign in with Google</p>
                    </a>
                </div>
                <div className='flex justify-center my-5 mx-5'>
                    <a href="/" className="flex items-center justify-center text-slate-800 bg-white rounded-full w-48 py-2">
                        <img src="/images/facebook-logo.svg" className="w-6 h-6 mr-2" alt="Google Logo"/>
                        <p className="text-sm">Sign in with facebook</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Login;
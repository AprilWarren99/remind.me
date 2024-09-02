import React from 'react';

export default function Header() {
    return (
        <header>
            <a href="/" className='flex flex-row items-center mx-6 my-12'>
                <img src='/images/logo.svg' className='justify-start w-32 mx-6' alt="remind.me logo"/>
                <h1 className='text-slate-200 text-3xl lg:text-5xl'>Remind.<span className='text-orange-500'>ME</span></h1>
            </a>
        </header>
    );
}

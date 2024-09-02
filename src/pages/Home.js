import React from 'react';

function Home() {
    return (
        <div>
			<div className='grid h-screen items-center'>
				<div className='flex flex-col lg:flex-row items-center justify-evenly'>
					<img src='/images/logo.svg' className='w-3/5 lg:max-w-96' alt='remind.me logo' aria-hidden/>
					<div>
						<h1 className='text-slate-200 text-3xl lg:text-7xl'>Remind.<span className='text-orange-500'>ME</span></h1>
						<p className='text-slate-200 text-2xl lg:text-4xl'>To Pick Up Those...</p>
					</div>
				</div>
				<div className='mx-auto justify-self-end self-end mb-20'>
					<a href="#get_notified_box" className='text-orange-400 text-3xl rounded-2xl bg-white px-6 py-2'>Scroll Down</a>
				</div>
				
			</div>
			<div className='h-screen flex flex-col justify-center items-center'>
				<div id="get_notified_box" className='bg-black border-2 border-slate-200 lg:ml-96 w-3/5 max-w-[550px] h-fit rounded-xl my-5 p-5 shadow-custom-purple'>
					<h2 className='text-slate-200 text-6xl mb-2 text-center'><span className='mr-16'>Get Notified</span><br/> <span className='ml-36'>Your Way</span></h2>
					<p className='text-slate-200 text-xl'>With us, you control how you get your reminders:</p>
					<ul className='list-disc text-xl text-slate-200 py-5 px-10'>
						<li>SMS</li>
						<li>Email</li>
						<li>Push Notification</li>
						<li>and more to come!</li>
					</ul>
				</div>

				<div className='bg-black border-2 border-slate-200 lg:mr-96 w-3/5 max-w-[550px] h-fit rounded-xl my-5 p-5  shadow-custom-orange'>
					<h2 className='text-slate-200 text-6xl mb-2 text-center'>Don't Forget What's Important</h2>
					<p className='text-slate-200 text-xl'>Tell us what and when, and we'll make sure you know where you need to be!</p>
					<p className='text-slate-200 text-xl my-4'>Set simple reminders, make groceries lists, remember that specialists appointment they just had to book for 2 years from now...</p>
					<p className='text-slate-200 text-xl'>All that's important, in one easy to access place.</p>
				</div>
			</div>

			<div>
				<h2 className='text-[#E98500] text-4xl text-center'>Sign Up Below!</h2>
				<form className='flex flex-col w-screen items-center mt-12' action='/'>
					<input type="text" className='placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-6' placeholder='Email'/>
					<input type="text" className='placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-6' placeholder='Password'/>
					<button type="submit" className='rounded-md bg-[#E98500] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6E0088] focus:bg-[#6E0088] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E98500]'>Register</button>
				</form>
				<p className='text-center mt-6'><a href="/login" className='rounded-md bg-[#E98500] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6E0088] focus:bg-[#6E0088] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E98500]'>Login</a></p>
				<div className='flex flex-row justify-center'>
					<div className='flex justify-center my-5 mx-5'>
						<a href="/" className="flex items-center justify-center text-slate-800 bg-white rounded-full w-48 py-2">
							<img src="/images/google-logo.svg" className="w-6 h-6 mr-2" alt="Google Logo"/>
							<p className="text-sm">Sign up with Google</p>
						</a>
					</div>
					<div className='flex justify-center my-5 mx-5'>
						<a href="/" className="flex items-center justify-center text-slate-800 bg-white rounded-full w-48 py-2">
							<img src="/images/facebook-logo.svg" className="w-6 h-6 mr-2" alt="Google Logo"/>
							<p className="text-sm">Sign up with facebook</p>
						</a>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Home;
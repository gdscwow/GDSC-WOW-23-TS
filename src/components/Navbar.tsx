import Image from 'next/image';
import { Poppins } from '@next/font/google';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export default function Navbar() {
	return (
		<nav className='sticky top-0 z-10 w-screen' id='navbar'>
			<div className='block lg:hidden'>
				<div className='flex items-center justify-between px-10 py-10 bg-white select-none backdrop:blur-lg'>
					<FiMenu className='text-3xl font-bold fill-gblue' />
					<button className='flex items-center px-6 py-4 text-sm rounded-md cursor-pointer lg:text-md bg-gblue'>
						<span className={`${poppins.className} text-white`}>SWITCH TO ANOTHER REGION</span>
					</button>
				</div>
			</div>
			<div className='hidden lg:block'>
				<div className='flex items-center w-full py-6 bg-white select-none justify-evenly backdrop:blur-lg'>
					<div className='flex items-center justify-center gap-2 text-2xl lg:text-3xl'>
						<Image src='/svg/circle.svg' width={70} height={70} className='w-[2em] animate-spin-slow' alt='circle' />
						<span className='font-bold text-transparent font-google-sans bg-clip-text bg-gradient-to-r from-gblue to-ggreen'>
							WOW
						</span>
					</div>
					<div className='flex items-center justify-evenly'>
						{[
							{ name: 'Home', to: '#hero' },
							{ name: 'About us', to: '#region-banner' },
							{ name: 'Regions', to: '#regions' },
							{ name: 'Hackathon', to: '#hackathon' },
							{ name: 'Contact us', to: '#footer' }
						].map((x) => {
							return (
								<a
									key={x.name}
									id='custom-ul'
									href={`${x.to}`}
									as={'/'}
									className={`${poppins.className} px-4 relative inline-block after:-bottom-2 hover:text-black cursor-pointer text-gray-500  text-md lg:text-lg`}>
									{x.name}
								</a>
							);
						})}
					</div>
					<a
						href='#regions'
						className='flex items-center px-6 py-4 text-sm rounded-md cursor-pointer lg:text-md bg-gblue'>
						<span className={`${poppins.className} text-white`}>SWITCH TO ANOTHER REGION</span>
					</a>
				</div>
			</div>
		</nav>
	);
}

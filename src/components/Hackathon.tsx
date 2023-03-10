import Image from 'next/image';
import { Poppins } from '@next/font/google';
import styles from '@/styles/Hero.module.css';
import { useEffect, useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });
export default function Hackathon() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.screen.width < 768) {
			setIsMobile(true);
		}
	}, []);

	return (
		<div id='hackathon' className='flex w-screen h-screen'>
			<div className='grid w-full h-full grid-flow-col gap-10 max-md:grid-flow-row max-md:gap-0 max-md:px-0 px-14 place-items-center'>
				<div className='max-md:flex max-md:flex-col max-md:gap-4 max-md:justify-center max-md:items-center'>
					{isMobile ? (
						<Image
							src={window.screen.width < 768 ? '/svg/wowcenter.svg' : '/svg/wow.svg'}
							className='max-md:h-full max-md:w-72'
							width={500}
							height={500}
							alt='hackathon'
						/>
					) : (
						<Image src='/svg/wow.svg' width={500} height={500} alt='hackathon' />
					)}
					<h1
						className={`uppercase text-[6rem] max-md:text-5xl font-google-sans font-bold text-transparent ${styles.bgGradientAnim}`}>
						Hackathon
					</h1>
					<button
						className='apply-button'
						data-hackathon-slug='gdscwow'
						data-button-theme='light'
						style={{ height: '44px', width: '312px' }}></button>
				</div>
				<div>
					<Image
						src='/svg/hackathon.svg'
						width={600}
						height={600}
						className='max-md:h-fit max-md:w-96'
						alt='hackathon'
					/>
				</div>
			</div>
		</div>
	);
}

import { useState, useEffect, useReducer, use } from 'react';
import Image from 'next/image';
import { Poppins } from '@next/font/google';

import styles from '@/styles/Hero.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Region, useCurrentRegion } from '@/context/Region.context';
import { Punjab } from '@/regions';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });
const poppinsBold = Poppins({ subsets: ['latin'], weight: '700' });

const RegionNotFound = ({ currentRegion }: { currentRegion: string | null | undefined }) => {
	const router = useRouter();
	const videoUrl = 'https://www.youtube.com/embed/sDJtzVOB8Jo';
	return (
		<div className='grid w-screen grid-cols-1 grid-rows-1 gap-20 px-24 mt-5 mb-10 md:grid-cols-2 md:grid-rows-1'>
			<div className='flex flex-col items-center w-full md:items-start'>
				<div className='mb-4 text-2xl font-semibold text-gblue'>Hello, We Welcome you to</div>
				<Image src='svg/wow.svg' alt='wow' width={520} height={245} className='w-[80%]' />
				<div className={`${poppins.className} text-gray-600 text-lg`}>A liitle intro about WOW</div>
				<div className='w-fit group'>
					<a href='#regions' className='flex items-center p-5 mt-5 rounded-md cursor-pointer h-14 w-fit bg-gblue'>
						<span className={`${poppins.className} text-white`}>FIND YOUR WOW</span>
					</a>
					<div className='mt-2 h-[2px] transition-all group-hover:bg-ggreen w-full bg-transparent'></div>
				</div>
			</div>
			<div className='flex items-center justify-center w-full md:justify-end'>
				<iframe src={videoUrl} width={600} height={415} className='relative w-[100%]' allowFullScreen={true} />
			</div>
		</div>
	);
};

const RegionFound = ({ currentRegion }: { currentRegion: Region | null | undefined }) => {
	if (currentRegion?.name === 'Bhubaneswar') {
		return (
			<div className='w-screen mb-16 sm:mb-20'>
				<div className='w-full h-full flex flex-col md:flex-row'>
					<div className='flex flex-col items-center md:items-start justify-center mx-24'>
						<p className='hidden min-[1537px]:block mb-5 min-[1537px]:mt-8 text-2xl font-semibold text-center text-gblue'>
							Hello, We Welcome you to
						</p>
						<Image src='/svg/wowcenter.svg' width={300} height={300} alt='circle' />
						<div className='uppercase text-transparent bg-gradient-to-r bg-clip-text from-[#2E2525] to-[#733423] text-justify text-[5vw] font-google-sans font-bold'>
							{currentRegion?.name}
						</div>
					</div>
					<div className='flex flex-col items-center justify-center mx-24'>
						<div className='mb-4 min-[1537px]:mb-8 w-fit group'>
							<button className='flex items-center px-6 py-3 mt-5 text-xl rounded-md cursor-pointer w-fit bg-gblue'>
								<span className={`${poppins.className} text-white`}>
									{currentRegion?.registration ? (
										<Link href={currentRegion.registration}>Register Now !</Link>
									) : (
										`REGISTRATIONS OPENING SOON !`
									)}
								</span>
							</button>
							<div className='mt-2 h-[2px] transition-all group-hover:bg-ggreen w-full bg-transparent'></div>
						</div>
						<div className={`mb-4 min-[1537px]:mb-8 text-xl sm:text-3xl text-center ${poppins.className}`}>
							<div>Date: {currentRegion?.date || 'To Be Announced'}</div>
							<div className='mt-2 h-[2px] transition-all bg-gred w-full'></div>
						</div>
						<div className={`text-center text-lg sm:text-2xl ${poppins.className}`}>
							{currentRegion?.map && currentRegion.venue ? (
								<Link href={currentRegion.map}>
									<div>Venue: {currentRegion.venue}</div>
								</Link>
							) : (
								<div>Venue: {currentRegion?.venue || 'Coming Soon'}</div>
							)}

							<div className='mt-2 h-[2px] transition-all bg-gyellow w-full'></div>
						</div>
					</div>
				</div>
				<div className='relative w-full '>
					<Image src={'/png/bbsr.png'} width={1440} height={380} alt='Bhubaneswar' className='relative w-full' />
				</div>
			</div>
		);
	}

	if (currentRegion?.name.toLowerCase() === 'punjab') {
		return (
			<Punjab
				date={currentRegion?.date}
				venue={currentRegion?.venue}
				map={currentRegion?.map as string}
				name={currentRegion?.name}
				principalSubdivision={currentRegion?.principalSubdivision}
				registration={currentRegion?.registration}
			/>
		);
	}
	if (currentRegion?.name === 'Jaipur') {
		return (
			<div className='w-screen mb-16 sm:mb-20'>
				<div className='flex flex-col items-center justify-center mx-24'>
					<p className='hidden min-[1537px]:block mb-5 min-[1537px]:mt-8 text-2xl font-semibold text-center text-gblue'>
						Hello, We Welcome you to
					</p>
					<Image src='/svg/wowcenter.svg' width={500} height={500} alt='circle' />
					<div
						className={`uppercase text-transparent text-justify text-[7vw] font-google-sans font-bold ${styles.bgGradientAnim}`}>
						{currentRegion?.name}
					</div>
					<div className='mb-4 min-[1537px]:mb-8 w-fit group'>
						<div className='mt-2 h-[2px] transition-all group-hover:bg-ggreen w-full bg-transparent'></div>
					</div>
					<div className={`mb-4 min-[1537px]:mb-8 text-xl sm:text-3xl text-center ${poppins.className}`}>
						<div className='mt-2 h-[2px] transition-all bg-gred w-full'></div>
					</div>
					<div className='flex flex-col justify-center items-center gap-4'>
						<div className='flex flex-wrap justify-evenly gap-8'>
							<Image src='/png/bits.jpg' className='rounded-full ' alt='bits' width={200} height={200} />
							<Image src='/png/bisr.jpg' className='rounded-full ' alt='bisr' width={200} height={200} />
						</div>
						<div className='text-lg p-4 text-center'>
							Organized by Birla Institute of Technology, Mesra, Ranchi, Jaipur Campus in Association with Birla
							Institute of Scientific Research, Jaipur
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='w-screen mb-16 sm:mb-20'>
			{/* <Image
				src='/svg/chakri.svg'
				width={400}
				height={400}
				alt='wow'
				className='fixed left-[-200px] top-[calc(50vh-200px)]'
			/> */}
			<div className='flex flex-col items-center justify-center mx-24'>
				<p className='hidden min-[1537px]:block mb-5 min-[1537px]:mt-8 text-2xl font-semibold text-center text-gblue'>
					Hello, We Welcome you to
				</p>
				<Image src='/svg/wowcenter.svg' width={500} height={500} alt='circle' />
				<div
					className={`uppercase text-transparent text-justify text-[7vw] font-google-sans font-bold ${styles.bgGradientAnim}`}>
					{currentRegion?.name}
				</div>
				{/* text-5xl sm:text-7xl md:text-8xl lg:text-9xl */}
				<div className='mb-4 min-[1537px]:mb-8 w-fit group'>
					<button className='flex items-center px-6 py-3 mt-5 text-xl rounded-md cursor-pointer w-fit bg-gblue'>
						<span className={`${poppins.className} text-white`}>
							{currentRegion?.registration ? (
								<Link href={currentRegion.registration}>Register Now !</Link>
							) : (
								`REGISTRATIONS OPENING SOON !`
							)}
						</span>
					</button>
					<div className='mt-2 h-[2px] transition-all group-hover:bg-ggreen w-full bg-transparent'></div>
				</div>
				<div className={`mb-4 min-[1537px]:mb-8 text-xl sm:text-3xl text-center ${poppins.className}`}>
					<div>Date: {currentRegion?.date || 'To Be Announced'}</div>
					<div className='mt-2 h-[2px] transition-all bg-gred w-full'></div>
				</div>
				<div className={`text-center text-lg sm:text-2xl ${poppins.className}`}>
					{currentRegion?.map && currentRegion.venue ? (
						<Link href={currentRegion.map}>
							<div>Venue: {currentRegion.venue}</div>
						</Link>
					) : (
						<div>Venue: {currentRegion?.venue || 'Coming Soon'}</div>
					)}

					<div className='mt-2 h-[2px] transition-all bg-gyellow w-full'></div>
				</div>
			</div>
			{/* <Image
				src='/svg/chakri.svg'
				width={400}
				height={400}
				alt='wow'
				className='fixed right-[-200px] top-[calc(50vh-200px)]'
			/> */}
		</div>
	);
};

const RegionScroll = ({
	regionList
}: {
	regionList: {
		name: string;
		principalSubdivision: string;
		city?: string;
		date: string;
		venue: string;
	}[];
}) => {
	return (
		<>
			<div id='region-banner' className='relative hidden mt-0 mb-4 md:block min-[1537px]:mt-24'>
				<Image src='/svg/banner.svg' width={1440} height={35} alt='Banner' className='w-screen' />
			</div>
			<div
				className={`mb-20 mt-0 min-[1537px]:mt-20 select-none relative overflow-hidden w-screen h-[7rem] text-7xl text-transparent ${styles.bgGradient}`}>
				<div className='bg-transparent w-fit h-fit'>
					<div
						id='carousel'
						className='flex flex-row overflow-visible uppercase bg-transparent divide-black animate-scroll w-fit'>
						{regionList?.map((region, i) => {
							return (
								<div className='font-[700] transition-all  hover:text-[5rem]  flex flex-col text-center' key={i}>
									<h1 style={{ borderLeftWidth: 3 + 'px' }} className='border-black border-solid cursor-pointer px-36'>
										{region.name}
									</h1>
									<span className='text-xl text-black border-none'>{region.date}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default function Hero() {
	const router = useRouter();
	const [regionList, setRegionList] = useState<Region[]>([]);

	const regionContext = useCurrentRegion()!;

	useEffect(() => {
		(async () => {
			try {
				const regionsData: Region[] = await (await fetch('/JSON/regions.json')).json();
				setRegionList(regionsData);

				const queryRegion = router.query.region as string;
				// console.log('Region Found in Query: ', queryRegion);

				const region =
					queryRegion === undefined
						? undefined
						: regionsData.find(
								(region) =>
									region.city?.toLowerCase() === queryRegion?.toLowerCase() ||
									region.name?.toLowerCase() === queryRegion?.toLowerCase()
						  );
				regionContext.setRegion(region);
				// console.log('Region Found: ', region);
				if (queryRegion === undefined && region === undefined) {
					// console.log('Finding Location... ');
					const geoLocationPermission = await navigator.permissions.query({
						name: 'geolocation'
					});
					if (geoLocationPermission.state === 'denied') {
						regionContext.setRegion(undefined);
					}

					const getCurrentPosition = () => {
						navigator.geolocation.getCurrentPosition((position) => {
							fetch(
								`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
							)
								.then((res) => res.json())
								.then((data) => {
									regionsData.some((region) => {
										if (
											region.city?.toLowerCase() === data.city.toLowerCase() ||
											region.name.toLowerCase() === data.city.toLowerCase() ||
											region.name.toLowerCase() === data.principalSubdivision.toLowerCase() ||
											region.principalSubdivision.toLowerCase() === data.principalSubdivision.toLowerCase()
										) {
											regionContext.setRegion(region);
											return true;
										}
										return false;
									});
								});
						});
					};

					geoLocationPermission.onchange = getCurrentPosition;

					getCurrentPosition();
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [router.query]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (regionContext.current === null) {
				regionContext.setRegion(undefined);
			}
		}, 5000);
		if (regionContext.current !== undefined && regionContext.current !== null) {
			clearTimeout(timeout);
		}

		return () => clearTimeout(timeout);
	}, [regionContext.current]);

	if (regionContext.current !== null) {
		return (
			<div id='hero' className=''>
				{regionContext.current === undefined ? (
					<RegionNotFound currentRegion={regionContext.current} />
				) : (
					<RegionFound currentRegion={regionContext.current} />
				)}
				<RegionScroll regionList={regionList} />
			</div>
		);
	}

	return (
		<div className='flex flex-col items-center justify-center w-screen min-h-screen gap-10'>
			<Image src='/svg/circle.svg' width={120} height={120} className='animate-spin-slow' alt='circle' />
			<h1 className='text-3xl text-center font-google-sans'>
				Finding Your Region
				<br />
				Please Wait ...
			</h1>
		</div>
	);
}

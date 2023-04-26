import { useCurrentRegion } from '@/context/Region.context';
import Image from 'next/image';
import Link from 'next/link';

const Sponsor = () => {
	const regionData = useCurrentRegion()!;
	if (regionData.current?.name === 'Jaipur')
		return (
			<div className='relative flex flex-col mt-10 items-center w-screen font-google-sans'>
				<div className='relative flex flex-col items-center divide-y-[1px] divide-ggreen p-10 mx-10 w-[80%] text-lg border-2 rounded-lg sm:mx-24 border-gblue'>
					<div className='flex items-center flex-col h-full w-full pb-8'>
						<div className='font-semibold text-2xl mt-8 mb-4 text-ggreen'>Title Sponsor</div>
						<div className='flex flex-row h-full items-end w-full justify-evenly'>
							<div className='flex flex-col h-full justify-evenly gap-4 items-center'>
								<div className='w-[200px]'>
									<Link href='https://zeltatech.com/'>
										<Image src='/jaipur/Zelta2.png' alt='Zelta' width={400} height={400} />
									</Link>
								</div>
								{/* <div className='font-semibold '>Zelta Tech</div> */}
							</div>
						</div>
					</div>

					<div className='flex items-center flex-col w-full pb-8'>
						<div className='font-semibold text-2xl mt-8 mb-4 text-ggreen'>Gold Sponsors</div>
						<div className='flex flex-row flex-wrap gap-8 h-full items-end w-full justify-evenly'>
							<div className='flex flex-col h-full justify-evenly gap-4 items-center'>
								<div className='w-[200px]'>
									<Image src='/jaipur/5ire.svg' alt='5ire Chain' width={400} height={400} />
								</div>
								{/* <div className='font-semibold '>5Fire Chain</div> */}
							</div>
							<div className='flex flex-col h-full justify-evenly gap-4 items-center'>
								<div className='w-[200px]'>
									<Image src='/jaipur/Zeeve.jpeg' alt='Zeeve' width={549} height={549} />
								</div>
								{/* <div className='font-semibold '>Zeeve</div> */}
							</div>
						</div>
					</div>
					<div className='flex items-center flex-col w-full pb-8'>
						<div className='font-semibold text-2xl mt-8 mb-4 text-ggreen'>Bronze Sponsors</div>
						<div className='flex flex-row flex-wrap gap-8 h-full items-end w-full justify-evenly'>
							<div className='flex flex-col h-full justify-evenly gap-4 items-center'>
								<div className='w-[200px]'>
									<Image src='/jaipur/Tribe.png' alt='Tribe' width={400} height={400} />
								</div>
								{/* <div className='font-semibold '>5Fire Chain</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className='absolute px-24 py-2 text-3xl font-medium text-white rounded-lg bg-gblue top-[-3%]'>
					Sponsors
				</div>
			</div>
		);
	if (regionData.current?.name === 'Hyderabad')
		return (
			<div className='relative flex flex-col mt-10 items-center w-screen font-google-sans'>
				<div className='relative flex flex-col items-center divide-y-[1px] divide-ggreen p-10 mx-10 w-[80%] text-lg border-2 rounded-lg sm:mx-24 border-gblue'>
					<div className='flex items-center flex-col h-full w-full pb-8'>
						{/* <div className='font-semibold text-2xl mt-8 mb-4 text-ggreen'>Sponsors</div> */}
						<div className='flex flex-row h-full items-end w-full justify-evenly flex-wrap'>
							<div className='flex flex-col h-full justify-evenly gap-4 items-center'>
								<div className='w-[200px] mt-8 mb-4'>
									<Link href='http://www.elitceler.com/'>
										<Image src='/hyd/hyd.png' alt='ElitCeler Technologies' width={400} height={400} />
									</Link>
								</div>
								<div className='font-semibold '>ElitCeler Technologies</div>
							</div>
							<div className='flex flex-col h-full justify-evenly  items-center'>
								<div className='w-[200px] mt-8 mb-4'>
									<Link href='http://newbielearning.com'>
										<Image src='/hyd/hyd2.png' alt='Newbie' width={400} height={400} />
									</Link>
								</div>
								<div className='font-semibold mt-[-60px]'>Newbie</div>
							</div>
							<div className='flex flex-col h-full justify-evenly  items-center'>
								<div className='w-[200px] mt-8 mb-4'>
									<Image src='/hyd/hyd3.png' alt='CreatX' width={400} height={400} />
								</div>
								<div className='font-semibold mt-[-60px]'>CreatX</div>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute px-24 py-2 text-3xl font-medium text-white rounded-lg bg-gblue top-[-3%]'>
					Sponsors
				</div>
			</div>
		);
	return <></>;
};

export default Sponsor;

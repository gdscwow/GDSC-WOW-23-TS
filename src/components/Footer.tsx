import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div
			id='footer'
			className='flex flex-col justify-between p-10 m-10 border-2 border-black rounded-lg  lg:flex-row font-google-sans'>
			<div className='flex flex-col items-center lg:items-start gap-4 w-full  lg:w-[35%]'>
				<div className='text-3xl font-bold text-gred'>About Us</div>
				<div className='text-lg'>
					GDSC WOW is an annual collaboration of GDSCs in India where we aim at providing quality education, network and
					a wide exploration of technology and community with lots of fun.
				</div>
				<Image src='/svg/logoblack.svg' width={210} height={100} alt='Contact' className='mt-4' />
			</div>
			<div className='flex flex-col items-center justify-between gap-4'>
				<div className='flex flex-col items-center gap-4'>
					<div className='text-3xl font-bold text-ggreen'>Follow Us</div>
					<div className='flex flex-row gap-8 text-3xl'>
						<Link href='https://discord.gg/2e8Tq7tm'>
							<Image src='/svg/discord.svg' alt='discord' width={35} height={35} className='w-[1em]' />
						</Link>
						<Link href='https://instagram.com/gdscwow?igshid=ZDdkNTZiNTM='>
							<Image src='/svg/insta.svg' alt='insta' width={35} height={35} className='w-[1em]' />
						</Link>
						<Link href='https://www.youtube.com/@DiversityinGDSC'>
							<Image src='/svg/youtube.svg' alt='youtube' width={48} height={48} className='w-[1.3em] mt-[-10%]' />
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<div className='mt-4 text-3xl font-bold text-gblue '>Contact Us</div>
					<div className='text-lg'>gdscwow@gmail.com</div>
					<div className='text-lg'>support@gdscwow.team</div>
				</div>
			</div>
			<div className='flex items-center justify-center w-full mt-4 lg:w-fit lg:mt-0'>
				<Image src='/svg/contact.svg' width={400} height={288} alt='Contact' />
			</div>
		</div>
	);
};

export default Footer;

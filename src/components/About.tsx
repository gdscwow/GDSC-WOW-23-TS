import Image from 'next/image';

export default function About() {
	return (
		<div className='relative flex flex-col items-center w-screen font-google-sans'>
			<div className='relative flex flex-col p-10 mx-10 text-lg border-2 rounded-lg sm:mx-24 border-gred md:flex-row'>
				<div>
					<span className='font-semibold'>Namaste India!</span>
					<br /> GDSC WOW (Wonder Of Wonders) is a prodigious event happening across India premeditated for all Student
					Highfliers, Developers, Tech enthusiasts, to enrich their proficiency in Sustaining and Emerging Technologies.
					This platform focuses predominantly on creating an understanding of Why behind the technologies germination
					and the massive impact they create on the current society, all of this in collaboration with over 400 GDSCs in
					India.
					<br />
					<br />
					<span className='font-semibold'>What is GDSC ?</span>
					<br />
					Google Developer Student Clubs are university based community groups for students interested in Google
					developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a
					developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment
					and build solutions for local businesses and their community.
				</div>
				<Image src='/svg/about.svg' alt='About' className='w-full md:w-[40%] lg:w-[50%]' width={500} height={300} />
			</div>
			<div className='absolute px-24 py-2 text-3xl font-medium text-white rounded-lg bg-gred top-[-7%]'>About us</div>
		</div>
	);
}

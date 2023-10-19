import Footer from './Footer';
import Nav from './Nav';
import schedule from '../data/schedule.js';
import warintza from '../assets/img/warintza.jpeg';

export default function Contact() {
	return (
		<>
			<Nav />
			<div className='w-screen flex justify-center bg-gradient-to-b from-bgDark from-9% via-brand-800 via-50% to-brand-600 to-9% font-sans leading-normal tracking-normal min-h-screen text-gray-50 pt-16 pb-16'>
				<div className='w-3/5'>
					<h1 className='text-center text-red-300 m-10'>Contacto</h1>
					<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
						{/* Warintz img col */}
						<div className='bg-warintza bg-no-repeat bg-center max-[768px]:h-60'>
							{/* Warintz */}
						</div>
						{/* Contact col */}
						<div className='bg-bgDark p-4 border-gray-500 border-[1px] rounded-lg px-10 md:px-5'>
							<h1 className='text-lg font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
								Bienvenidos a UE Cordillera del Condor
							</h1>
							<ul className='py-8'>
								<p>Dirección:</p>
								<li className='px-6 '>Limón Indanza, Warintz </li>
							</ul>
							<ul className='py-8'>
								<p>Contactos:</p>
								<li className='px-6'>+ 593 234 567 88</li>
								<li className='px-6'>+ 593 234 567 88</li>
								<li className='px-6'>+ 593 234 567 88</li>
							</ul>
						</div>
						{/* Schedule col */}
						<div className='bg-bgDark p-4 border-gray-500 border-[1px] rounded-lg px-10 md:px-5'>
							<h1 className='text-lg font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
								Horarios de atención
							</h1>
							<ul>
								{schedule.map((item) => (
									<li
										key={item.id}
										className='py-4 divide-y divide-gray-500/10'
									>
										<p className='font-bold pb-1 pl-2'>{item.day}</p>
										<p className='pt-'>{item.hour}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

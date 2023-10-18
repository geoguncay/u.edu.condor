import Nav from './Nav';
import teachers from '../data/teachers.js';
import Footer from './Footer';

export default function Teachers() {
	return (
		<>
			<Nav />
			<div className='w-screen flex justify-center bg-gradient-to-b from-bgDark from-9% via-brand-800 via-50% to-brand-600 to-9% font-sans leading-normal tracking-normal min-h-screen text-gray-50 pt-16 pb-16'>
				<div className='w-3/5'>
					<h1 className='text-center text-red-300 m-10'>
						Docentes de la Unidad Educativa Cordillera del Condor
					</h1>
					<div className='grid lg:grid-cols-3  md:grid-cols-2 grid-col'>
						{teachers.map((teacher) => (
							<div
								key={teacher.id}
								className='flex flex-col items-center gap-2'
							>
								<img
									src={teacher.src}
									className='w-3/4 rounded-tl-[2rem] 
									rounded-br-[2rem]'
								/>
								<div className='w-full py-5 text-center'>
									<h2> {teacher.name} </h2>
									<h2> {teacher.last_name} </h2>
									<h2> {teacher.e_mail} </h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

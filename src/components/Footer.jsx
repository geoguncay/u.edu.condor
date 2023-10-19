import Maps from './Maps';
import institution from '../data/institution';
import contact from '../data/contact';
import { BiLogoFacebook } from 'react-icons/bi';
import { RiTwitterXFill } from 'react-icons/ri';

export default function Footer() {
	return (
		<footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-brand-950 dark:text-neutral-200 lg:text-left'>
			<div className='flex items-center justify-center border-b-2 border-yellow-500 p-6 dark:border-brand-700 lg:justify-between'>
				<div className='mr-12 hidden lg:block'>
					<span>Mantente conectado con nuestras redes sociales:</span>
				</div>
				{/* <!-- Social network icons container --> */}
				<div className='flex justify-center'>
					<a
						className='mr-6 text-neutral-600 dark:text-neutral-200 text-xl cursor-pointer hover:text-brand-500'
						href='https://facebook.com'
					>
						{<BiLogoFacebook />}
					</a>
					<a
						className='mr-6 text-neutral-600 dark:text-neutral-200 text-xl cursor-pointer hover:text-brand-500'
						href='https://twiter.com'
					>
						{<RiTwitterXFill />}
					</a>
				</div>
			</div>
			{/* Footer content */}
			<div className='mx-6 py-10 text-center md:text-left'>
				{/* lg:divide-x lg:divide-brand-800 */}
				<div className='grid-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
					{/* <!-- Compromiso --> */}
					<div className='bg-transparent'>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Nuestro Compromiso
						</h6>
						<p className='flex justify-center md:pl-4 p-1 md:justify-start'>
							Trabajar día a día para hacer de vuestra práctica educativa la
							mejor experiencia, replanteando y estructurando el proceso de
							enseñanza - aprendizaje acorde las nuevas exigencias de la
							sociedad, haciendo de la Unidad Educativa el mejor lugar para
							aprender, para crecer, para ser felices...
						</p>
					</div>
					{/* <!-- Institución --> */}
					<div className='bg-transparent'>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Institución
						</h6>
						{institution.map((item) => (
							<div
								className='flex justify-center md:pl-4 p-1 md:justify-start'
								key={item.id}
							>
								<a
									href={item.href}
									className='text-neutral-600 dark:text-neutral-200 md:pl-4 p-2 hover:text-brand-500'
								>
									{item.name}
								</a>
							</div>
						))}
					</div>
					{/* <!-- Mapa --> */}
					<div className='bg-transparent'>
						<Maps />
					</div>
					{/* <!-- Contacto --> */}
					<div className='bg-transparent'>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Contactos
						</h6>
						{contact.map((item) => (
							<div
								className='flex justify-center md:pl-4 p-1 md:justify-start'
								key={item.id}
							>
								<p className='text-neutral-600 dark:text-neutral-200 md:pl-4 p-2 hover:text-brand-500'>
									{item.info}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* <!--Copyright--> */}
			<div className='bg-neutral-200 p-4 text-center dark:bg-bgDark border-t-2 border-yellow-500 '>
				<span>© 2023 Copyright:</span>
				<a
					className='font-semibold text-neutral-600 dark:text-neutral-400 pl-2'
					href='https://www.linkedin.com/in/geoguncay/'
				>
					Geo Guncay
				</a>
			</div>
		</footer>
	);
}

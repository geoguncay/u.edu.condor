import Maps from './Maps';
import institution from '../data/institution';
import contact from '../data/contact';

export default function Footer() {
	return (
		<footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-brand-950 dark:text-neutral-200 lg:text-left'>
			<div className='flex items-center justify-center border-b-2 border-yellow-500 p-6 dark:border-brand-700 lg:justify-between'>
				<div className='mr-12 hidden lg:block'>
					<span>Mantente conectado con nuestras redes sociales:</span>
				</div>
				{/* <!-- Social network icons container --> */}
				<div className='flex justify-center'>
					<a className='mr-6 text-neutral-600 dark:text-neutral-200'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
						</svg>
					</a>
					<a className='mr-6 text-neutral-600 dark:text-neutral-200'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
						</svg>
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

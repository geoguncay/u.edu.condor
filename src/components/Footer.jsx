import Maps from './Maps';

const products = [
	{
		name: 'Código Convivencia',
		description: '',
		href: '#',
	},
	{
		name: 'Símbolos',
		description: '',
		href: '#',
	},
	{
		name: 'Misión y Visión',
		description: '',
		href: '#',
	},
	{
		name: 'Reseña Histórica',
		description: '',
		href: '#',
	},
];

export default function Footer() {
	return (
		<footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-brand-950 dark:text-neutral-200 lg:text-left'>
			<div className='flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between'>
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
				<div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{/* <!-- Tailwind Elements section --> */}
					<div className=''>
						<h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
							Comunícate con nosotros
						</h6>
						<p>
							Trabajamos día a día para hacer de vuestra práctica educativa la
							mejor experiencia, replanteando y estructurando el proceso de
							enseñanza - aprendizaje acorde las nuevas exigencias de la
							sociedad, haciendo de la Unidad Educativa el mejor lugar para
							aprender, para crecer, para ser felices...
						</p>
					</div>
					{/* <!-- Products section --> */}
					<div className=''>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Products
						</h6>
						{products.map((item) => (
							<p
								className='mb-4'
								key={item.name}
							>
								<a
									href={item.href}
									className='text-neutral-600 dark:text-neutral-200'
								>
									{item.name}
								</a>
							</p>
						))}
					</div>
					{/* <!-- Useful links section --> */}
					<div className=''>
						<Maps />
					</div>
					{/* <!-- Contact section --> */}
					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Contactos
						</h6>
						<p className='mb-4 flex items-center justify-center md:justify-start'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='mr-3 h-5 w-5'
							>
								<path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
								<path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
							</svg>
							MORONA SANTIAGO, LIMON INDANZA, 140353
						</p>
						<p className='mb-4 flex items-center justify-center md:justify-start'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='mr-3 h-5 w-5'
							>
								<path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
								<path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
							</svg>
							info@example.com
						</p>
						<p className='mb-4 flex items-center justify-center md:justify-start'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='mr-3 h-5 w-5'
							>
								<path
									fillRule='evenodd'
									d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
									clipRule='evenodd'
								/>
							</svg>
							+ 593 234 567 88
						</p>
					</div>
				</div>
			</div>

			{/* <!--Copyright section--> */}
			<div className='bg-neutral-200 p-4 text-center dark:bg-bgDark'>
				<span>© 2023 Copyright:</span>
				<a
					className='font-semibold text-neutral-600 dark:text-neutral-400 pl-2'
					href='https://github.com/geoguncay'
				>
					Geo Guncay
				</a>
			</div>
		</footer>
	);
}

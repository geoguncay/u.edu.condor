export default function NotFound() {
	return (
		<main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-screen bg-gradient-to-b from-bgDark from-9% via-brand-800 via-85% to-bgDark to-9%'>
			<div className='text-center text-[3rem]'>
				<h1 className='mt-4 font-bold tracking-tight text-textLight sm:text-5xl'>
					404
				</h1>
				<p className='font-semibold text-textLight'>Page not found </p>
				<p className='mt-6 text-base leading-7 text-gray-400'>
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<a
						href='/'
						className='rounded-md bg-brandPrimary px-3.5 py-2.5 text-sm font-semibold text-textDark shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Go back home
					</a>
				</div>
			</div>
		</main>
	);
}

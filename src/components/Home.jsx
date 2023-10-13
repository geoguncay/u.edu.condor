import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';

export default function Home() {
	return (
		<>
			<Nav />
			<div className='bg-gradient-to-b from-bgDark from-9% via-brand-800 via-50% to-brand-600 to-9% font-sans leading-normal tracking-normal min-h-screen'>
				<Hero />
			</div>
			<Footer />
		</>
	);
}

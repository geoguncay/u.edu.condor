import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Nav from './Nav';
import Footer from './Footer';
import faq from '../data/faqs';

const renderWithLineBreaks = (text) => {
	// Dividimos la cadena por el carácter \n y obtenemos un arreglo de subcadenas
	const lines = text.split('\n');
	// Usamos el método map para transformar cada subcadena en un elemento JSX con un <br/> al final
	const jsxLines = lines.map((line, index) => (
		<React.Fragment key={index}>
			{line}
			<br />
		</React.Fragment>
	));
	// Retornamos el arreglo de elementos JSX
	return jsxLines;
};

export default function Faqs() {
	return (
		<>
			<Nav />
			<div className='w-screen flex justify-center bg-gradient-to-b from-bgDark from-9% via-brand-800 via-50% to-brand-600 to-9% font-sans leading-normal tracking-normal min-h-screen text-gray-50 pt-16 pb-16'>
				<div className='w-3/5'>
					<h1 className='text-center text-red-300 m-10'>Preguntas</h1>
					<div className='grid gap-5 lg:grid-cols-2  md:grid-col grid-col '>
						{faq.map((item) => (
							<div
								key={item.id}
								className='hover:bg-brand-800 p-2 rounded-lg'
							>
								<h3 className='flex w-full justify-between rounded-lg bg-bgDark px-4 py-2 text-left text-sm font-medium text-textLight  mb-4'>
									{item.question}
								</h3>
								<p>{item.answer}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

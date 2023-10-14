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
			<div className='bg-gradient-to-b from-bgDark from-9% via-brand-800 via-50% to-brand-600 to-9% font-sans leading-normal tracking-normal min-h-screen !w-full p-16'>
				<div className='mx-auto w-full max-w-md rounded-2xl p-2 bg-brand-500'>
					{faq.map((faq) => (
						<Disclosure key={faq.id}>
							{({ open }) => (
								<>
									<Disclosure.Button className='flex w-full justify-between rounded-lg bg-bgDark px-4 py-2 text-left text-sm font-medium text-textLight hover:bg-brand-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-4'>
										<p>{faq.question}</p>
										<ChevronUpIcon
											className={`${
												open ? 'rotate-180 transform' : ''
											} h-5 w-5 text-brandPrimary`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='px-4 pt-4 pb-5 text-sm text-gray-900'>
										{renderWithLineBreaks(faq.answer)}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, Disclosure, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo from '../assets/cordilleraCondor.jpg';
import menu from '../data/menu';
import submenu from '../data/submenu';
import MenuPover from './MenuPover';
import '../index.css';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className='bg-white border-b-2 border-yellow-500'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
				aria-label='Global'
			>
				<div className='flex lg:flex-1'>
					<a
						href='/'
						className='-m-1.5 p-1.5'
					>
						<span className='sr-only'>Cordillera del Condor</span>
						<img
							className='h-10 w-auto'
							src={logo}
							alt='Cordillera del Condor'
						/>
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</button>
				</div>
				<Popover.Group className='hidden lg:flex lg:gap-x-12 align-middle'>
					{menu.map((item) => (
						<NavLink
							key={item.name}
							to={item.href}
							className={({ isActive, isPending }) =>
								`${
									isPending ? ' ' : isActive ? 'bg-brand-100' : ''
								} text-sm font-semibold leading-6 text-gray-900 items-center align-center justify-center p-2 rounded-md`
							}
						>
							{item.name}
						</NavLink>
					))}
					<MenuPover />
				</Popover.Group>
			</nav>
			{/* mobile Menu Open */}
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a
							href='/'
							className='-m-1.5 p-1.5'
						>
							<span className='sr-only'>Codillera del Condor</span>
							<img
								className='h-8 w-auto'
								src={logo}
								alt=''
							/>
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon
								className='h-6 w-6'
								aria-hidden='true'
							/>
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6 flex flex-col divide-y divide-brand-800'>
								<a
									href='#'
									className='text-base font-semibold leading-7 text-gray-900'
								>
									Inicio
								</a>
								<Disclosure
									as='div'
									className='-mx-3'
								>
									{({ open }) => (
										<>
											<Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
												Institución 
												<ChevronDownIcon
													className={classNames(
														open ? 'rotate-180' : '',
														'h-5 w-5 flex-none'
													)}
													aria-hidden='true'
												/>
											</Disclosure.Button>
											<Disclosure.Panel className='mt-2 space-y-2 divide-y divide-brand-800'>
												{[...submenu].map((item) => (
													<Disclosure.Button
														key={item.name}
														as='a'
														href={item.href}
														className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 '
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<a
									href='#'
									className='text-base font-semibold leading-7 text-gray-900'
								>
									Profesores
								</a>
								<a
									href='/preguntas'
									className='text-base font-semibold leading-7 text-gray-900'
								>
									Preguntas Frecuentes
								</a>
								<a
									href='#'
									className='text-base font-semibold leading-7 text-gray-900'
								>
									Contactos
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}

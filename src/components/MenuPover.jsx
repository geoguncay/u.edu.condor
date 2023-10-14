import { Fragment } from 'react';
import submenu from '../data/submenu';
import { Popover, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const MenuPover = () => {
	return (
		<Popover className='relative'>
			{({ open }) => (
				<>
					<Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 p-2'>
						Institución
						<ChevronRightIcon
							className={classNames(
								open ? 'rotate-90' : '',
								'h-5 w-5 flex-none text-brand-400'
							)}
							aria-hidden='true'
						/>
					</Popover.Button>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-200'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-150'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'
					>
						<Popover.Panel className='absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden border border-x-2 rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
							<div className='p-4'>
								{submenu.map((item) => (
									<div
										key={item.name}
										className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
									>
										<div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
											<item.icon
												className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
												aria-hidden='true'
											/>
										</div>
										<div className='flex-auto'>
											<a
												href={item.href}
												className='block font-semibold text-gray-900'
											>
												{item.name}
												<span className='absolute inset-0' />
											</a>
											<p className='mt-1 text-gray-600'>{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default MenuPover;

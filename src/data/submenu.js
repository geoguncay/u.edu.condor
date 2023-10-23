import {
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from '@heroicons/react/20/solid';

const submenu = [
	{
		name: 'Código Convivencia',
		description:
			'El documento que establece los principios, valores, derechos y deberes de los miembros de la comunidad educativa',
		href: '/codigo-convivencia',
		icon: FingerPrintIcon,
	},
	{
		name: 'Símbolos',
		description:
			'Los elementos visuales que representan la identidad, la historia y la cultura de la institución',
		href: '/simbolos',
		icon: CursorArrowRaysIcon,
	},
	{
		name: 'Misión y Visión',
		description:
			'La declaración que expresa el propósito, los objetivos y las aspiraciones de la institución',
		href: '/mision-vision',
		icon: ChartPieIcon,
	},
	{
		name: 'Reseña Histórica',
		description:
			'El relato que narra los orígenes, los acontecimientos y los logros más importantes de la institución',
		href: '/historia',
		icon: SquaresPlusIcon,
	},
];

export default submenu;

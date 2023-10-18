import Home from './components/Home';
import Faqs from './components/FAQs';
import Teachers from './components/Teachers';
import NotFound from './components/PageNotFound';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/Contact';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='preguntas'
						element={<Faqs />}
					/>
					<Route
						path='docentes'
						element={<Teachers />}
					/>
					<Route
						path='contactos'
						element={<Contact />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

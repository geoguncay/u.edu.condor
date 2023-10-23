import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Faqs from './components/FAQs';
import Teachers from './components/Teachers';
import NotFound from './components/PageNotFound';
import Contact from './components/Contact';
import History from './components/History';

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
						path='historia'
						element={<History />}
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

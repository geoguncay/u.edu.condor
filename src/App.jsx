import Home from './components/Home';
import Faqs from './components/FAQs';

import { Routes, BrowserRouter, Route } from 'react-router-dom';
import NotFound from './components/PageNotFound';
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
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

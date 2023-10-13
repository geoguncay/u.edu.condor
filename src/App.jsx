import Home from './components/Home';

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
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
	
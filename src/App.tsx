import './App.css';
import Main from './Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import ComunityPage from './Pages/ComunityPage';
import SurvivalPage from './Pages/SurvivalPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}>
						<Route path="survival" element={<SurvivalPage />} />
						<Route path="comunity" element={<ComunityPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

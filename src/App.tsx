import './App.css';
import Main from './Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SurvivalPage from './Pages/SurvivaPage';
import ComunityPage from './Pages/ComunityPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}>
						{/* <Route path="survivalPage" element={<SurvivalPage />} /> */}
						<Route path="comunityPage" element={<ComunityPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import ComunityPage from './pages/ComunityPage';
import SurvivalPage from './pages/SurvivalPage';
import Profile from './pages/Profile';
import RankPage from './pages/RankPage';
import ChatPage from './pages/ChatPage';
import LikePage from './pages/LikePage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}>
						<Route path="survival" element={<SurvivalPage />} />
						<Route path="comunity" element={<ComunityPage />} />
						<Route path="like" element={<LikePage />} />
						<Route path="rank" element={<RankPage />} />
						<Route path="chat" element={<ChatPage />} />
						<Route path="profile" element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

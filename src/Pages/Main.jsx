import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
	width: 360px;
	height: 100vh;
	display: flex;
	flex-direction: center;
	justify-content: center;
	align-items: center;
	border: 1px solid red;
	box-sizing: border-box;
`;

function MainPage() {
	return (
		<Container>
			{/* <Header /> */}
			<Outlet />
			{/* <Footer /> */}
		</Container>
	);
}

export default MainPage;

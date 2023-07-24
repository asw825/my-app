import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
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
			hello
			<Outlet />
			{/* <Footer /> */}
		</Container>
	);
}

export default MainPage;

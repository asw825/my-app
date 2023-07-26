import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Outlet } from 'react-router-dom';
import NavigationMenu from '../components/navigationmenu/NavigationMenu';

const Container = styled.div`
	width: 360px;
	height: 100vh;
	display: flex;
	flex-direction: center;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
	/* border: 1px solid red; */
	box-sizing: border-box;
`;

function MainPage() {
	return (
		<Container>
			{/* <Header /> */}
			<Link to={'/survival'}>
				<button>survivalMode</button>
			</Link>
			<Outlet />
			{/* <Footer /> */}
			<NavigationMenu />
		</Container>
	);
}

export default MainPage;

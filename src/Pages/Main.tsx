import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Container = styled.div`
	width: 360px;
	height: 640px;
	display: flex;
	flex-direction: center;
	justify-content: center;
	align-items: center;
	border: 1px solid red;
	box-sizing: border-box;
`;

function Main() {
	return (
		<Container>
			<Header />
			heelo
			<Footer />
		</Container>
	);
}

export default Main;

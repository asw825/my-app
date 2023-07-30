import React from 'react';
import { styled } from 'styled-components';
import { Character } from '../type';

const ViewCotent = styled.div`
	width: 320px;
	flex: 1;
	display: flex;
	border-radius: 15px;
	justify-content: space-around;
	align-items: center;
	/* border: 1px solid red; */
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
	background-color: aliceblue;
	margin: 10px 0px;
	background: center no-repeat;
	background-size: cover;
`;
function View({ character }: { character: Character }) {
	return (
		<ViewCotent
			style={{ backgroundImage: 'url(' + character.url + ')' }}
		></ViewCotent>
	);
}

export default View;

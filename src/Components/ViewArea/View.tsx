import React from 'react';
import { styled } from 'styled-components';
import { Character } from '../caracter/type';

const ViewCotent = styled.div`
	width: 320px;
	flex: 1;
	display: flex;
	border-radius: 15px;
	justify-content: space-around;
	align-items: center;
	border: 1px solid red;
	background-color: aliceblue;
	margin: 10px 0px;
`;
function View({ character }: { character: Character }) {
	return (
		<ViewCotent
			style={{ backgroundImage: 'url(' + character.url + ')' }}
		></ViewCotent>
	);
}

export default View;

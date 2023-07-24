import React from 'react';
import { styled } from 'styled-components';
import { Character } from '../Caracter/type';

const TopSheetCotent = styled.div`
	width: 320px;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: 1px solid red;
	border-radius: 15px;
	margin-top: 10px;
`;

function TopSheet({ character }: { character: Character }) {
	return <TopSheetCotent>{character.name}</TopSheetCotent>;
}

export default TopSheet;

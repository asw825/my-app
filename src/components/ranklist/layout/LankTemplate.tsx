import React from 'react';
import { Character } from '../../caracter/type';
import { styled } from 'styled-components';
import MiniProfile from '../MiniProfile';
import Rate from '../Rate';
const LankBoxLayout = styled.div`
	display: flex;
	width: 300px;
	height: 70px;
	background-color: #f3f3f3;
	margin-top: 2px;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 15px;
	cursor: pointer;
	&:active {
		background-color: #d8d8d8;
	}
`;
function LankTemplate({ character }: { character: Character }) {
	return (
		<LankBoxLayout>
			<MiniProfile character={character} />
			<Rate character={character} />
		</LankBoxLayout>
	);
}

export default LankTemplate;

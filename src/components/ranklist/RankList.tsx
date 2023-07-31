import React from 'react';
import { Character } from '../caracter/type';
import { dummyData } from '../../utils/dummyData';
import LankTemplate from './layout/LankTemplate';
import { styled } from 'styled-components';
const RankListScroll = styled.div`
	overflow: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
// const compareCharacters = (a: Character, b: Character) => {
// 	if (a.rate < b.rate) {
// 		return -1;
// 	}
// 	if (a.rate > b.rate) {
// 		return 1;
// 	}
// 	return 0;
// };
function RankList() {
	const characters = dummyData;
	return (
		<RankListScroll>
			{
				characters.map((character: Character) => {
					return <LankTemplate character={character} key={character.name} />;
				})
				// .sort(compareCharacters)
			}
		</RankListScroll>
	);
}

export default RankList;

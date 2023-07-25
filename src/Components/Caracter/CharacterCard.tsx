import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import { Character } from './type';
import Button from '../buttons/Button';
import BottomSheet from '../layoutsheet/BottomSheet';
import TopSheet from '../layoutsheet/TopSheet';
import View from '../viewarea/View';
import './characterCard.css';

const Content = styled.div`
	width: 320px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid red;
	box-sizing: border-box;
	background-color: #fff;
`;

// style={{
// 			backgroundImage: 'url(' + character.url + ')',
// 		}}

function CharacterCard({ character }: { character: Character }) {
	const outOfFrame = (name: string) => {
		console.log(name + ' left the screen!');
	};
	const swiped = (nameToDelete: string) => {
		console.log('removing: ' + nameToDelete);
	};

	return (
		<TinderCard
			preventSwipe={['up', 'down']}
			onCardLeftScreen={() => outOfFrame(character.name)}
			onSwipe={() => swiped}
			className="charactercard"
		>
			<Content>
				<TopSheet character={character} />
				<View character={character} />
				<BottomSheet />
			</Content>
		</TinderCard>
	);
}

export default CharacterCard;

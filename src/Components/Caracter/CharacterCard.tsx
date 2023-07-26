import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import { Character } from './type';
import Button from '../buttons/Button';
import ButtonGroup from '../layout/ButtonGroup';
import UserInfo from '../layout/UserInfo';
import View from '../layout/View';
import './characterCard.css';

const Content = styled.div`
	width: 320px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05);
	/* border: 1px solid red; */
	box-sizing: border-box;
	background-color: #fff;
`;

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
				<UserInfo character={character} />
				<View character={character} />
				<ButtonGroup />
			</Content>
		</TinderCard>
	);
}

export default CharacterCard;

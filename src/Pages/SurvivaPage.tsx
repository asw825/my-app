import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

const db = [
	{
		name: 'Richard Hendricks',
		url: './Assets/Images/richard.jpg',
	},
	{
		name: 'Erlich Bachman',
		url: './Assets/Images/erlich.jpg',
	},
	{
		name: 'Monica Hall',
		url: './Assets/Images/monica.jpg',
	},
	{
		name: 'Jared Dunn',
		url: './Assets/Images/jared.jpg',
	},
	{
		name: 'Dinesh Chugtai',
		url: './Assets/Images/dinesh.jpg',
	},
];

function SurvivalPage() {
	const characters = db;
	const [lastDirection, setLastDirection] = useState();

	const onSwipe = (direction: string) => {
		console.log('You swiped: ' + direction);
	};

	const onCardLeftScreen = (myIdentifier: string) => {
		console.log(myIdentifier + ' left the screen');
	};
	return characters.map((character) => {
		<TinderCard
			onSwipe={onSwipe}
			onCardLeftScreen={() => onCardLeftScreen('fooBar')}
			preventSwipe={['up', 'down']}
		>
			<div
				style={{ backgroundImage: 'url(' + character.url + ')' }}
				className="card"
			>
				<h3>{character.name}</h3>
			</div>
		</TinderCard>;
	});
}

export default SurvivalPage;

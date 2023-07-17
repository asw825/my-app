import React from 'react';
import TinderCard from 'react-tinder-card';

function ComunityPage() {
	const onSwipe = (direction: string) => {
		console.log('You swiped: ' + direction);
	};

	const onCardLeftScreen = (myIdentifier: string) => {
		console.log(myIdentifier + ' left the screen');
	};
	return (
		<TinderCard
			onSwipe={onSwipe}
			onCardLeftScreen={() => onCardLeftScreen('fooBar')}
			preventSwipe={['up', 'down']}
		>
			Hello, World!
		</TinderCard>
	);
}

export default ComunityPage;

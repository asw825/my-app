import React from 'react';
import CharacterCard from './CharacterCard';
import { Character } from './type';
import { dummyData } from '../../Utils/dummyData';
function CharacterList() {
	const characters = dummyData;
	return (
		<>
			{characters.map((character: Character) => {
				console.log(character);
				return <CharacterCard character={character} key={character.name} />;
			})}
		</>
	);
}

export default CharacterList;

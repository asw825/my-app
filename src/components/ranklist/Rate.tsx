import React from 'react';
import { Character } from '../caracter/type';
function Rate({ character }: { character: Character }) {
	return <div>{character.rate}</div>;
}

export default Rate;

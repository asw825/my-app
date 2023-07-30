import React from 'react';
import { Character } from '../caracter/type';
import { styled } from 'styled-components';
const Content = styled.div``;
function MiniProfile({ character }: { character: Character }) {
	return (
		<Content>
			<div>{character.name}</div>
		</Content>
	);
}

export default MiniProfile;

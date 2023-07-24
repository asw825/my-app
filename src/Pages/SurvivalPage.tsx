import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import CharacterList from '../Components/Caracter/CharacterList';

const CardContainer = styled.div`
	width: 90vw;
	max-width: 320px;
	height: 300px;
	overflow: hidden;
`;

function SurvivalPage() {
	return (
		<>
			<CharacterList />
		</>
	);
}

export default SurvivalPage;

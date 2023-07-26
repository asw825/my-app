import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import CharacterList from '../components/caracter/CharacterList';

function SurvivalPage() {
	return (
		<>
			<div
				style={{
					backgroundColor: '#FFFFFF',
					zIndex: 0,
					width: 300,
					height: 300,
					position: 'absolute',
				}}
			></div>
			<CharacterList />
		</>
	);
}

export default SurvivalPage;

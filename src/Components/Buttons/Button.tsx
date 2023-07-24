import React from 'react';
import { styled } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
const ButtonDesign = styled.button`
	width: 78px;
	height: 78px;
	border-radius: 50%;
	border: none;
	background-color: #ffffff;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
	cursor: pointer;
	&:active {
		background-color: #eee;
	}
`;

function Button() {
	return (
		<ButtonDesign>
			<AiFillStar size={36} color="#8A2387" />
		</ButtonDesign>
	);
}

export default Button;

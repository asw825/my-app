import React from 'react';
import { styled } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const StyledButton = styled.button`
	width: 78px;
	height: 78px;
	border-radius: 50%;
	border: none;
	background-color: #ffffff;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:active {
		background-color: #eee;
	}
`;

function Button() {
	return (
		<>
			<StyledButton>
				<RxCross2 size={36} color="#F27121" />
			</StyledButton>
			<StyledButton>
				<AiFillStar size={36} color="#8A2387" />
			</StyledButton>
		</>
	);
}

export default Button;

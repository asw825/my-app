import React from 'react';
import { styled } from 'styled-components';
import Button from '../buttons/Button';

const BottomSheetContent = styled.div`
	width: 320px;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* border: 1px solid red; */
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
	margin-bottom: 10px;
`;

function ButtonGroup() {
	return (
		<BottomSheetContent>
			<Button />
		</BottomSheetContent>
	);
}

export default ButtonGroup;

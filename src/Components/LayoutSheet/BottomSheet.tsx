import React from 'react';
import { styled } from 'styled-components';
import Button from '../Buttons/Button';

const BottomSheetContent = styled.div`
	width: 320px;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: 1px solid red;
	margin-bottom: 10px;
`;

function BottomSheet() {
	return (
		<BottomSheetContent>
			<Button />
			<Button />
		</BottomSheetContent>
	);
}

export default BottomSheet;

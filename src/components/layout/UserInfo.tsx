import React from 'react';
import { styled } from 'styled-components';
import { Character } from '../caracter/type';

const UserInfoCotent = styled.div`
	width: 320px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: 1px solid red; */
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
	border-radius: 15px;
	margin-top: 10px;
	flex-direction: column;
	font-size: 16px;
`;

function UserInfo({ character }: { character: Character }) {
	return (
		<UserInfoCotent>
			<div>{character.name}</div>
			<div>{character.city}</div>
		</UserInfoCotent>
	);
}

export default UserInfo;

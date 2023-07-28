import React from 'react';
import styled from 'styled-components';
import jared from '../assets/images/jared.jpg';

const Content = styled.div`
	width: 320px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
	border: 1px solid gray;
	box-sizing: border-box;
	border-radius: 15px;
	background-color: #fff;
`;
const ProfileImg = styled.img`
	width: inherit;
	flex: 1;
	border-radius: 15px;
	/* border: 1px solid green; */
`;
const Introduce = styled.div`
	width: inherit;
	flex: 2;
	/* border: 1px solid blue; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
	padding: 10px;
`;

function Profile() {
	return (
		<Content>
			<ProfileImg src={jared} />
			<Introduce>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						<h2>name</h2>
						<p>job</p>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<div>프로필수정하기</div>
					</div>
				</div>
				<div>
					<h3>자기소개</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
						deserunt!
					</p>
				</div>
				<div>
					<h3>취미</h3>
					<p>음악</p>
				</div>
				<div>
					<h3>갤러리</h3>
				</div>
			</Introduce>
		</Content>
	);
}

export default Profile;

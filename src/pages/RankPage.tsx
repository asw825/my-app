import React from 'react';
import styled from 'styled-components';
import RankList from '../components/ranklist/RankList';

const Content = styled.div`
	width: 320px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
	border: 1px solid gray;
	box-sizing: border-box;
	border-radius: 15px;
	background-color: #fff;
	box-sizing: border-box;
	overflow: hidden;
`;

function RankPage() {
	return (
		<Content>
			<RankList />
		</Content>
	);
}

export default RankPage;

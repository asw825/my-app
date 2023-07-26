import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCardRandom } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillChatTextFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StyledNavigationMenu = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: inherit;
	height: 48px;
	background-color: #f3f3f3;
	flex: 1;
	& svg:active {
		color: #e94057 !important;
	}
`;

function NavigationMenu() {
	return (
		<StyledNavigationMenu>
			<Link to={'/'}>
				<GiCardRandom size={28} color="#ADAFBB" />
			</Link>
			<Link to={'/like'}>
				<AiFillHeart size={28} color="#ADAFBB" />
			</Link>
			<Link to={'/chat'}>
				<BsFillChatTextFill size={28} color="#ADAFBB" />
			</Link>
			<Link to={'/profile'}>
				<FaUserAlt size={28} color="#ADAFBB" />
			</Link>
		</StyledNavigationMenu>
	);
}

export default NavigationMenu;

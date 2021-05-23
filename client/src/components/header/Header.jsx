import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/support.png';

import { Tooltip } from 'react-tippy';

const StyledHeader = styled.header`
	width: 100%;
	height: 7vh;
	position: fixed;
	top: 0;
	left: 0;
	background: #434343;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
`;

const ImgContainer = styled.div`
	height: 3rem;
	width: 3rem;
	margin: 0 0.8rem;
	position: relative;

	&:after {
		content: '';
		display: inline-block;
		height: 1.2rem;
		width: 1.2rem;
		background: #00be00;
		border-radius: 50%;
		position: absolute;
		right: -0.1rem;
		bottom: -0.1rem;
		border: 2px solid #434343;
	}
`;

const Img = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
`;

const Title = styled.h2`
	font-weight: 500;
	transition: 0.2s all;

	&:hover {
		color: #cacaca;
		cursor: pointer;
	}
`;

const StyledTooltip = styled.div`
	font-size: 1.4rem;
	padding: 1.5rem;
	/* width: 60rem; */
	text-align: left;
`;

const List = styled.ul`
	list-style: disc;
	font-weight: 400;
	font-style: italic;
	margin: 1rem 0 0 1rem;
	line-height: 1.8rem;
`;

function Header() {
	return (
		<StyledHeader>
			<ImgContainer>
				<Img src={avatar} alt='bot avatar' />
			</ImgContainer>
			<Tooltip
				html={
					<StyledTooltip>
						Czatbot udzieli Ci odpowiedzi z zakresu:
						<List>
							<ul>Kierunki studiów,</ul>
							<ul>Warunki rekrutacji,</ul>
							<ul>Progi punktowe,</ul>
							<ul>Kalendarz rekrutacji,</ul>
							<ul>E-rekrtutacja,</ul>
							<ul>Opłaty,</ul>
							<ul>Sport na AGH,</ul>
							<ul>Kontakt do AGH.</ul>
						</List>
					</StyledTooltip>
				}
				position='bottom'
				interactive
				trigger='click'
				// style={{ borderRadius: 0, background: 'red' }}
			>
				{' '}
				<Title>AGH Bot</Title>
			</Tooltip>
		</StyledHeader>
	);
}

export default Header;

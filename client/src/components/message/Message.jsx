import React from 'react';
import styled, { css } from 'styled-components';
import { Anchorme } from 'react-anchorme';

import userAvatar from '../../assets/graduated.png';
import botAvatar from '../../assets/support.png';

const StyledMessage = styled.div`
	border-radius: 2.5rem;
	min-height: 2rem;
	width: fit-content;
	max-width: 35rem;
	padding: 1rem;
	${({ sender }) =>
		sender === 'user'
			? css`
					background-color: #00693c;
			  `
			: css`
					background: #5c5c5c;
			  `}
`;

const MessageContainer = styled.div`
	margin: 1rem 0rem;
	display: flex;
	${({ sender }) =>
		sender === 'user'
			? css`
					justify-content: flex-end;
			  `
			: css`
					justify-content: flex-start;
			  `}
`;

const ImgContainer = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	margin: 0 0.5rem;
	${({ sender }) =>
		sender === 'user'
			? css`
					justify-content: flex-end;
			  `
			: css`
					order: -1;
			  `}
`;

const Img = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
`;

function Message({ text, sender }) {
	return (
		<MessageContainer sender={sender}>
			<StyledMessage sender={sender}>
				<p style={{ whiteSpace: 'pre-line' }}>
					<Anchorme target='_blank' rel='noreferrer noopener'>
						{text}
					</Anchorme>
				</p>
			</StyledMessage>
			<ImgContainer sender={sender}>
				<Img
					src={sender === 'user' ? userAvatar : botAvatar}
					alt={sender === 'user' ? 'student avatar' : 'bot avatar'}
				/>
			</ImgContainer>
		</MessageContainer>
	);
}

export default Message;

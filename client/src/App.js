import Bar from './components/bar/Bar';
import Header from './components/header/Header';
import './index.css';
import { useEffect, useRef } from 'react';
import 'react-tippy/dist/tippy.css';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Message from './components/message/Message';

const Background = styled.div`
	background: #383838;
	color: white;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 7vh 3rem;
	/* align-items: center; */
`;

const WelcomeMessage = styled.div`
	color: #616161;
	position: absolute;
	top: 8rem;
	left: 50%;
	transform: translateX(-50%);
	font-size: 1.2rem;
	font-weight: 400;
	font-style: italic;
`;

function App() {
	const messages = useSelector((state) => state.messages);
	const scrollToBottomRef = useRef();

	useEffect(() => {
		scrollToBottom();
	});

	const scrollToBottom = () => {
		scrollToBottomRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Background>
			<Header />
			{messages.map((message, index) => (
				<Message key={index} text={message.message} sender={message.sender} />
			))}
			{messages.length === 0 && (
				<WelcomeMessage>Rozpocznij rozmowę z czatbotem AGH!</WelcomeMessage>
			)}
			<div ref={scrollToBottomRef}></div>
			<Bar />
		</Background>
	);
}

export default App;

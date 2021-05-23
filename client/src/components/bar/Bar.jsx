import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { green } from '@material-ui/core/colors';

import {
	storeUserMessage,
	storeBotMessage,
} from '../../actions/messageActions';
import { useDispatch } from 'react-redux';

const StyledBar = styled.div`
	height: 7vh;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #434343;
	box-shadow: 0 -0.3rem 1rem rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputField = styled.input`
	width: 80%;
	height: 100%;
	border-radius: 2.5rem;
	background: #696969;
	outline: none;
	border: none;
	padding: 0 2rem;
	color: white;
`;

const Form = styled.form`
	flex: 1;
	height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Bar() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) return;

		dispatch(storeUserMessage(text));
		dispatch(storeBotMessage(text));

		setText('');
	};

	return (
		<StyledBar>
			<Form onSubmit={(e) => onSubmit(e)}>
				<InputField
					ref={inputRef}
					value={text}
					onChange={(e) => setText(e.target.value)}
					type='text'
				/>
				<IconButton
					type='submit'
					color='primary'
					aria-label='add to shopping cart'
				>
					<SendIcon fontSize='large' style={{ color: green[500] }} />
				</IconButton>
			</Form>
		</StyledBar>
	);
}

export default Bar;

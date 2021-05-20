import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

//this is the component for the button that starts and resets the game, it has an onClick event that uses a callback to start the game

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

export default StartButton;
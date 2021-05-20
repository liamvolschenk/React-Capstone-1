import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

//this is the component for the display on the side of the game
const Display = ({ gameOver, text }) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display;
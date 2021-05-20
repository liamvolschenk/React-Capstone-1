import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

//this component creates the individual square cells that we see in the stage, it is styled using style components
const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

//optomizing the app using React.memo to reduce the amount of re-renders
export default React.memo(Cell);
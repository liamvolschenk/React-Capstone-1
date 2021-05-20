import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

//this is the component for the stage where the game is played, we set the height and width of the stage and fill it with the cells

const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
);

export default Stage;
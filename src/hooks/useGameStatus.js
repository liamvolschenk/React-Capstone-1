import { useState, useEffect, useCallback } from 'react';

//here we calculate the players score and level depending on how many rows they have cleared

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [100, 200, 300, 800];

    const calcScore = useCallback(() => { //using a callback to avoid going into an infinite loop
        //Check to see if we have score
        if (rowsCleared > 0) {
            //here we calculate the score for the game
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }
    }, [level, linePoints, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel];

};
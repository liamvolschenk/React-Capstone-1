import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { StyledHelpButton } from './styles/StyledHelpButton';

//this is the component for a help button which when clicked gives the player some info and rules about the game, I have used a bootstrap modal for this

function HelpButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <StyledHelpButton>
            <Button style={{ color: 'white', backgroundColor: '#333', border: 'none', height: '30px', width: '100%' }} onClick={handleShow}>
                HELP
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: 'Pixel' }} >Game Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tetris is a tile matching game, the goal is to fill up rows of the grid using the different shapes and when you have
                completed a row it will disappear, this is how you get points and move up the levels. <br /><br />
                Use your arrow keys to move left and right and down to speed up the falling of the shapes, and use the up key to rotate the shape. <br /><br />
                Clearing one row gives you 100 points, two rows awards 200 points, three rows awards 300 points and clearing four rows awards you 800 points!
                Clearing four rows is also knows as TETRIS! <br /><br />
                In order to move up a level you will need to clear 10 rows, each level up will make the shapes fall faster. There is no way to beat Tetris,
                the game will go on until you lose! But thats the fun in it, challenge yourself or your friends and see who can reach the highest score in this game
                of intelligence and skill.
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ fontFamily: 'Pixel' }} variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </StyledHelpButton>
    );
}

export default HelpButton;
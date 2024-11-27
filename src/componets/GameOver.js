import React from "react";

import { useDispatch, useSelector } from "react-redux";

function GameOver() {

    const gameOver = useSelector(state => state.gameOver)
    const dispatch = useDispatch();

    function handleGameOver() {
        dispatch({type: "NEW_GAME"});
    };

    return(gameOver ? 
        <div id="gameOver">
            <div>Parabéns, você completou o jogo!</div>
            <button onClick={handleGameOver} id="button-GameOver">Jogue Novamente</button> 
        </div> :
        <React.Fragment></React.Fragment>)
    

};

export default GameOver;
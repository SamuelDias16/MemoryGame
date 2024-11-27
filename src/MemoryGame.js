import React from "react";

import BoardGame from "./componets/BoardGame";
import GameOver from "./componets/GameOver";

import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux";
import cardsReducer from "./reducers/cardsReducer";
import gameOverReducer from "./reducers/gameOverReducer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function MemoryGame() {

    const allReducers = combineReducers({
        cards: cardsReducer,
        gameOver: gameOverReducer
    })
    const store = createStore(allReducers);


    return(<Provider store={store}>

        <BoardGame></BoardGame>
        <GameOver></GameOver>
                
    </Provider>)

};  

export default MemoryGame;
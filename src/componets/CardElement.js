import React from "react";

import script from "../game/script";

import { useDispatch, useSelector } from "react-redux";

import {  } from "react-router-dom"

function Card(props) {

    const cards = useSelector(state => state.cards);
    const dispatch = useDispatch();

    function handleFlip(card){
        if(script.checkMove(card)){
            card.flipped = true;
            dispatch({type: "UPDATE_CARDS", value: [...cards]});

            if(script.checkTime) {
                setTimeout(() => {
                    script.checkMatch();
                    dispatch({type: "UPDATE_CARDS", value: [...cards]})

                    if(script.checkGameOver()){
                        dispatch({type: "GAME_OVER"});
                    }
                }, 800)
            };
        }
    }

    let imgSerch = 'assets/images/' + props.card.icon + '.png';
    return(
        <div onClick={() => {handleFlip(props.card)}} className={props.card.flipped ? "card flip" : "card"}>
            <div className="card_front">
                <img src={imgSerch}></img>
            </div>
            <div className="card_back">
                {"</>"}
            </div>
        </div>)

};

export default Card;
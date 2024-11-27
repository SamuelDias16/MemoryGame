import React from "react";

import Card from "./CardElement";

import { useSelector } from "react-redux";

function BoardGame(){

    const cards = useSelector(state => state.cards);
    
    return (<div id="boardGame">

        {cards.map((card, index) => {
            card.id = index;

            return (<Card card={card}></Card>)
        })}

    </div>)

};

export default BoardGame;
import game from "../game/interface"

function cardsReducer(state = game.createCards(), action){
    switch (action.type) {
        case "UPDATE_CARDS":
            return [...action.value];

        case "NEW_GAME":
            return game.createCards();

        default:
            return state;
    }
}

export default cardsReducer;
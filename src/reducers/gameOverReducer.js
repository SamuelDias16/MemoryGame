function gameOverReducer(state = false, action){
    switch (action.type) {
        case "NEW_GAME":
            return false;

        case "GAME_OVER": 
            return true;
    
        default:
            return state;
    }
};

export default gameOverReducer;
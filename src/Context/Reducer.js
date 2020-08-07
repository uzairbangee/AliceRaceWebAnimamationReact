const Reducer = (state, action) => {
    switch(action.type){
        case "CHANGE_MODE":
            return {
                ...state,
                play : action.payload
            }
        case "INCREASE_SPEED":
            return {
                ...state,
                speed : state.speed * 1.1
            }
        case "DECREASED_SPEED":
            return {
                ...state,
                speed : state.speed <= 0 ? 1 : Math.abs(state.speed - 1.1)
            }
        default:
            return {
                ...state
            }
    }
}

export default Reducer;
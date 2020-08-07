import Reducer from './Reducer';
import React, {createContext, useReducer} from 'react';

const initialState = {
    play : true,
    speed : 1
}

const ActionContext = createContext(initialState);

const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <ActionContext.Provider value={{
            play : state.play,
            speed : state.speed,
            dispatch
        }}
        >
            {children}
        </ActionContext.Provider>
    )
}

export {
    ActionContext,
    GlobalState
}
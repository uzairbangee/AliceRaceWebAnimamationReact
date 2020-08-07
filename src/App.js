import React, {Fragment, useEffect, useContext} from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import Background1 from './Components/Background1';
import Background2 from './Components/Background2';
import Foreground1 from './Components/Foreground1';
import Foreground2 from './Components/Foreground2';
import Alice from './Components/Alice';
import {ActionContext} from './Context/GlobalState'

const App = () => {

  const {play, speed, dispatch} = useContext(ActionContext);

  const start = () => {
    dispatch({
      type : "CHANGE_MODE",
      payload : !play
    })
  }

  const plus = (e) => {
    dispatch({
      type : "INCREASE_SPEED",
    })
  }

  const minus = (e) => {
    dispatch({
      type : "DECREASED_SPEED",
    })
  }

  return (
    <Fragment>
      <div className="wrapper">
        {
          play
          ? 
          <button className="play" onClick={start}>Pause</button>
          :
          <button className="play" onClick={start}>Play</button>
        }
          <button className="plus" onClick={minus}>-</button>
          <button className="minus" onClick={plus}>+</button>

      <div className="sky"></div>
          <Alice/>
        <Foreground1/>
        <Foreground2/>
        <Background1 />
        <Background2 />
      </div>
    </Fragment>
  );
}

export default App;

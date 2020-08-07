import React, {Fragment, useEffect, useContext} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import {ActionContext} from '../Context/GlobalState'

const sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
  };

const Foreground2 = () => {

    const {play, speed} = useContext(ActionContext);


    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground
      });

      useEffect(() => {
        play ? getAnimation().play() : getAnimation().pause();
        if (speed < .8) {
            getAnimation().updatePlaybackRate(speed/2 * -1)
        }
        else if (speed > 1.2){
            getAnimation().updatePlaybackRate(speed/2)
        }
        else{
            getAnimation().updatePlaybackRate(0)
        }
    }, [play, speed])

    return (
        <Fragment>
        <div className="scenery" id="foreground2" ref={ref}>    
          <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
          <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
        </div>
        </Fragment>
    )
}

export default Foreground2;
import React, {Fragment, useEffect, useContext} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import {ActionContext} from '../Context/GlobalState'

const sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
};

const Background2 = () => {

    const {play, speed} = useContext(ActionContext);


    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground
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
            <div className="scenery" id="background2" ref={ref}>
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
            </div>
        </Fragment>
    )
}

export default Background2;
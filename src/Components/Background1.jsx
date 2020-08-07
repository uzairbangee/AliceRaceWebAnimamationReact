import React, {Fragment, useEffect, useContext} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import {ActionContext} from '../Context/GlobalState'

const sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ]; 
  
const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
};

const Background1 = () => {

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
            <div className="scenery" id="background1" ref={ref}>
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
            </div>
        </Fragment>
    )
}

export default Background1;
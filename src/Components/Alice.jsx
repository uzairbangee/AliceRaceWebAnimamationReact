import React, {Fragment, useEffect, useContext} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import {ActionContext} from '../Context/GlobalState'

const spriteFrames = [
    { transform: 'translateY(0%)' },
    { transform: 'translateY(-100%)' }   
  ];

const Alice = () => {

    const {play, speed} = useContext(ActionContext);


    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: spriteFrames,
        timing: {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity
        }
    });

    useEffect(() => {
        const animation = getAnimation();
        play ? getAnimation().play() : getAnimation().pause();
        getAnimation().updatePlaybackRate(speed)
    }, [play, speed])

    return (
        <Fragment>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img id="red-queen_and_alice_sprite" ref={ref} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."/>
          </div>
        </div>
        </Fragment>
    )
}

export default Alice;
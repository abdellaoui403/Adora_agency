import React from 'react';
import {useSpring,animated} from 'react-spring';


function Counter(n){
    const number = useSpring({
      from:{number:0},
      number:n,
      delay:20,
      config: {mass:1 ,tension :20,friction:10},
    });
    return <animated.dev>{number.to((n) => n.toFixed(0))}</animated.dev>;
  }

  export default Counter
  
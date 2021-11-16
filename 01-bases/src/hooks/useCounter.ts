import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 1 }) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => { // Este effect se ejecuta hasta que se renderiza todo el html

        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' });
        tl.current.to(elementToAnimate.current, { y: 0, duration: 0.5, ease: 'bounce.out' });
        tl.current.pause();
    }, [])

    useEffect(() => {
        
        // if (counter < 10) return;

        // console.log('%cSe llego al valor maximo :v', 'colo: red; background: black; border-radius: 20px; font-size: 20px; padding: 10px;');

        tl.current.play(0);

    }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick
    };
}
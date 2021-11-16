import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXINUM_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXINUM_COUNT));
    }

    useEffect(() => {
        
        if (counter < 10) return;

        console.log('%cSe llego al valor maximo :v', 'colo: red; background: black; border-radius: 20px; font-size: 20px; padding: 10px;');

        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' });
        tl.to(counterElement.current, { y: 0, duration: 0.5, ease: 'bounce.out' });

    }, [counter])

    return (
        <>
            <h1>Counter Effect:</h1>
            <h2 ref={ counterElement }>{ counter }</h2>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}

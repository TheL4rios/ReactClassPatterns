import { useReducer } from "react"
import { doEncreaseBy, doReset } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
};

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const onReset = () => {
        dispatch(doReset());
    }

    const onIncreaseBy = (value: number) => {
        dispatch(doEncreaseBy(value));
    }

    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>
                { JSON.stringify(counterState, null, 2) }
            </pre>

            <button onClick={ () => onIncreaseBy(1) }>
                +1
            </button>
            <button onClick={ () => onIncreaseBy(5) }>
                +5
            </button>
            <button onClick={ () =>onIncreaseBy(10) }>
                +10
            </button>
            <button onClick={ onReset }>
                Reset
            </button>
        </>
    )
}

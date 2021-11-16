export type CounterAction = 
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'reset' };

export const doReset = (): CounterAction => {
    return {
        type: 'reset'
    };
}

export const doEncreaseBy = (value: number): CounterAction => {
    return {
        type: 'increaseBy',
        payload: {
            value
        }
    };
}
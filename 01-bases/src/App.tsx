// import { CounterReducerComponent } from './bases/CounterReducer';

import { CounterReducerComponent } from "./counter-reducer/CounterReducer";

// import { Counter } from './bases/Counter';
// import { CounterBy } from './bases/CounterBy';
// import { CounterEffect } from './bases/CounterEffect';
// import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <>
      {/* <Counter initialValue={ 15 }/>
      <CounterBy />
      <CounterEffect/>
      <CounterHook/> */}
      <CounterReducerComponent/>
    </>
  );
}

export default App;

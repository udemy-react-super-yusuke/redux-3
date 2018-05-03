import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// action に type だけではなく、
// payload など他のプロパティも持たせることで、
// reducer の中で使用できる
store.dispatch({ type: "PLUS", payload: { num: 1 } });
store.dispatch({ type: "PLUS", payload: { num: 10 } });

store.dispatch({ type: "MINUS", payload: { num: 1 } });
store.dispatch({ type: "MINUS", payload: { num: 10 } });

// import React from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

// render(<App />, document.getElementById('root'));

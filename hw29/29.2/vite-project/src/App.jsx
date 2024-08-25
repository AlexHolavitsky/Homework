
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>TODO</h1>
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default App;















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {useSelector} from 'react-redux'
// import TodoList from './components/TodoList'


// function App() {

//   const counterRedux = useSelector((state)=> state.counter.counter);


//   return (
//     <>

//       <TodoList/>
//     </>
//   )
// }

// export default App

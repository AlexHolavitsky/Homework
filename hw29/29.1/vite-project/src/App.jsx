import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from 'react-redux'
import Counter from './components/Counter'
import TodoList from './components/TodoList'


function App() {

  const counterRedux = useSelector((state)=> state.counter.counter);


  return (
    <>
      <h1>Value:{counterRedux}</h1>
      <Counter/>
      {/* <TodoList/> */}
    </>
  )
}

export default App

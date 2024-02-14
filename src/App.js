import React, { useReducer } from 'react'
import './App.css'

function counterReducer(state,val){
  return state+val;

}

const App = () => {
  const [counter,dispatch] = useReducer(counterReducer,0)
  return (
    <div className='mt-4 d-flex' >
      <button className='btn btn-primary m-2' onClick={()=>{
        dispatch(-1)
      }}>-</button>
      <div className='m-2'>Counter:{counter}</div>
      <button className='btn btn-primary m-2' onClick={()=>{
        dispatch(1)
      }}>+</button>
    </div>
  )
}

export default App

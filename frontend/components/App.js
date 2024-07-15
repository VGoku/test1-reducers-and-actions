import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../state/slice';

export default function App() {
  const count = useSelector(st => st.state.count)
  const day = "Monday"
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hello, World!</h2>
      <button onClick={() =>{
        dispatch(increment())
      }}>This count is {count}</button>
      <button onClick={() => {
        //dispatch nextDay
      }}>The day is {day}</button>
    </div>
  )
}

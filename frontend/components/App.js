import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, nextDay, save, spend } from '../state/slice';

export default function App() {
  const count = useSelector(st => st.state.count)
  const day = useSelector(st => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return days[st.state.day]
  })
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hello, World!</h2>
      <button onClick={() =>{
        dispatch(increment())
      }}>This count is {count}</button>
      <div>
      <button onClick={() => {
        //dispatch nextDay
        const action = nextDay()
        dispatch(action)
      }}>The day is {day}</button>
      </div>
    </div>
  )
}

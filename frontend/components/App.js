import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, nextDay, save, spend } from '../state/slice';
import "../styles/styles.css"
import { favFriend, deleteFriend, createFriend } from '../state/friendsSlice';

export default function App() {
  const count = useSelector(st => st.state.count);

  const day = useSelector(st => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return days[st.state.day]
  });
  const savings = useSelector(st => st.state.savings);

  const friends = useSelector(st => st.friends.list)
  const dispatch = useDispatch();
  const ref = useRef();
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
      <div>
        <h3>Savings are at ${savings}</h3>

        <button onClick={() => {
          // const action = save(10)
          dispatch(save(10))
        }}>Save $10</button>
        <button onClick={() => {
          // const action = spend(5)
          dispatch(spend(5))
        }}>Spend $5</button>
      </div>
      <div>
      <h3>Friends</h3>
        <input ref={ref}></input>
        <button onClick={() => {
          const name = ref.current.value
          dispatch(createFriend(name))
        }}>create</button>
        <ul>
          {friends.map(fr => (
            <li key={fr.id}>
              {fr.name}
              <button onClick={() => {
                //dispatch favFriend
                dispatch(favFriend(fr.id))
              }}>fav</button>
              <button onClick={() => {
                // dispatch deleteFriend
                dispatch(deleteFriend(fr.id))
              }}>del</button>
              {fr.fav && " ❤️"}
            </li>
          ))}
        </ul>
      </div>
        {/* <div>
          <h3>Create Friends</h3>
      <input ref={ref}></input>
      <button onClick={() => {
        dispatch(createFriend(ref.current.value))
        ref.current.value = '' // ❗ resetting the input
      }}>create</button>
      <ul>
        {friends.map(fr => (
          <li key={fr.id}>
            {fr.name}
            <button onClick={() => dispatch(favFriend(fr.id))}>fav</button>
            <button onClick={() => dispatch(deleteFriend(fr.id))}>del</button>
            {fr.fav && ' ❤️'}
          </li>
        ))}
      </ul>
    </div> */}
    </div>
  )
}

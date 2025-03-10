import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './user.slice'
import { RootState } from '../store'
import { fetchUsers } from './action'

export function Counter() {
  const dispatch = useDispatch()

  // useSelector-ით ვიღებთ state-ის მონაცემებს
  const count = useSelector((state: RootState) => state.counter.value)
  const isLoading = useSelector((state: RootState) => state.counter.isLoading)
  const users = useSelector((state: RootState) => state.counter.users)
  const error = useSelector((state: RootState) => state.counter.error)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]) 

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <h1>hello there</h1>
      {users.map(({ id, email }) => (
        <div key={id}>
          <h4>{email}</h4>
        </div>
      ))}
      <div>
        {error && <h1>{error}</h1>}
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

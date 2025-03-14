import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./user.slice";
import { useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "./action";
import { AppDispatch } from "../store";

export function User() {
  const { error, isLoading, users, count } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

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
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h2>{count}</h2>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

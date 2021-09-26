import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.css";
import {
  decrement, decrementAsync, increment, incrementAsync,
  selectCount
} from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          aria-label="Increment value async"
          onClick={() => dispatch(incrementAsync())}
        >
          [+]
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className={styles.asyncButton}
          aria-label="Decrement value async"
          onClick={() => dispatch(decrementAsync())}
        >
          [-]
        </button>
      </div>
    </div>
  );
}

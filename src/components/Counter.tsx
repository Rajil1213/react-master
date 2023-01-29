import { Component } from "react";
import { counterActions, counterState } from "../store";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";

export const Counter = () => {
  const counter = useSelector((state: counterState) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch<counterActions>({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch<counterActions>({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class CounterClass extends Component {
  incrementHandler() {
    (this.props as ReturnType<typeof mapDispatchToProps>).increment();
  }
  decrementHandler() {
    (this.props as ReturnType<typeof mapDispatchToProps>).decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>
          {(this.props as ReturnType<typeof mapStateToProps>).counter}
        </div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state: counterState) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: (action: counterActions) => any) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);

// export default Counter;

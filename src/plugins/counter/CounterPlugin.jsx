import { Counter } from "./Counter";
import React from "react";
import counterReducer from "./counterSlice";

const plugin = {
  id: "counter",
  mainComponent: <Counter />,
  reducer: counterReducer
};

export default plugin;

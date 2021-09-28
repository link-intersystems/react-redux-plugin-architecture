import React from "react";
import { Provider } from "react-redux";

async function provideStore({ plugins, store, ...others }) {
  if (store == null) {
    throw new Error("store is not configured yet");
  }

  const render = (children) =>
    React.createElement(Provider, { plugins, store }, children);

  return {
    ...others,
    plugins,
    render,
  };
}

export default provideStore;

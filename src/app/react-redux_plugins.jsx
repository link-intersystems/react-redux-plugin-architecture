import React from "react";
import { Provider } from "react-redux";

async function provideStore({ plugins, store }) {
  const render = (component) => <Provider store={store}>{component}</Provider>;

  return {
    plugins,
    render,
  };
}

export default provideStore;

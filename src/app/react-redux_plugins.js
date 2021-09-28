import React from "react";
import { Provider } from "react-redux";

async function provideStore({ plugins, store }) {
  const render = (children) =>
    React.createElement(Provider, { plugins, store }, children);

  return {
    plugins,
    render,
  };
}

export default provideStore;

import React from "react";
import ReactDOM from "react-dom";
import runPlugins from "./pluginRunner";
import { Provider } from "react-redux";

function run(pluginPaths) {
  runPlugins(pluginPaths, (store, plugin) => {
    console.log("Init plugin", plugin);

    const pluginSlot = document.getElementById(plugin.id);

    if (pluginSlot == null) {
      console.error(`Unable to find target for plugin ${plugin.id}`);
      return;
    }

    ReactDOM.render(
      <Provider store={store}>{plugin.mainComponent}</Provider>,
      pluginSlot
    );
  });
}

export default run;

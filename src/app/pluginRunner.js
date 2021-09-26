import { configureStore } from "@reduxjs/toolkit";
import monitorReducerEnhancer from "./monitorEnhancer";

function run(pluginPaths, onPluginLoaded) {
  Promise.all(
    pluginPaths.map(async (pluginPath) => await import("../" + pluginPath))
  ).then((importedPluigins) => {
    const plugins = importedPluigins.map((p) => p.default);

    let reducerConfig = {};

    plugins.forEach((plugin) => {
      if (plugin.reducer) {
        const name = plugin.id;
        reducerConfig = {
          ...reducerConfig,
          [name]: plugin.reducer,
        };
      }
    });

    const store = configureStore({
      reducer: reducerConfig,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      enhancers: (defaultEnhancers) => [
        monitorReducerEnhancer,
        ...defaultEnhancers,
      ],
    });

    plugins.forEach((plugin) => {
      onPluginLoaded(store, plugin);
    });
  });
}

export default run;

import { configureStore as rtkConfigureStore } from "@reduxjs/toolkit";
import monitorReducerEnhancer from "./monitorEnhancer";

async function configureStore({ plugins, ...others }) {
  const getPluginReducerConfig = (plugin) => {
    if (plugin.reducer) {
      const reducerName = plugin.id;
      return {
        [reducerName]: plugin.reducer,
      };
    }
  };

  const reducerConfig = plugins.reduce((reducerConfig, plugin) => {
    const pluginReducerConfig = getPluginReducerConfig(plugin);
    return {
      ...reducerConfig,
      ...pluginReducerConfig,
    };
  }, {});

  const store = rtkConfigureStore({
    reducer: reducerConfig,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    enhancers: (defaultEnhancers) => [
      monitorReducerEnhancer,
      ...defaultEnhancers,
    ],
  });

  return {
    ...others,
    plugins,
    store,
  };
}

export default configureStore;

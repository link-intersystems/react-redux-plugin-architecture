import loadPlugins from "./runtime/plugins";
import logPlugins from "./runtime/plugins_logger";
import render from "./runtime/react_plugins";
import provideStore from "./runtime/react-redux_plugins";
import configureStore from "./runtime/redux_plugins";

//
const pluginPaths = ["counter/CounterPlugin", "jsonplaceholder/Plugin"];

console.log("START");
loadPlugins(pluginPaths)
  .then(logPlugins)
  .then(configureStore)
  .then(provideStore)
  .then(render);

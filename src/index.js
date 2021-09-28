import loadPlugins from "./app/plugins";
import render from "./app/react_plugins";
import provideStore from "./app/react-redux_plugins";
import configureStore from "./app/redux_plugins";

const pluginPaths = [
  "plugins/counter/CounterPlugin",
  "plugins/jsonplaceholder/Plugin",
];

loadPlugins(pluginPaths)
  .then(configureStore)
  .then(provideStore)
  .then(render);

import run from "./app/reactPluginRunner";

const pluginPaths = [
  "plugins/counter/CounterPlugin",
  "plugins/jsonplaceholder/Plugin"
];

run(pluginPaths);

This repository is an architecture proposal for plugin architectures in JavaScript. Even though it is implemented with a pure React and and React-Redux plugin app, the concepts can be applied to any JavaScript application.

# Goal

The goal of a plugin architecture is to add features to an application without modifying it. Therefore each plugin architecture honors the open-close principle.

# Structure

## [src/index.js](src/index.js)

The entry point runs the configured plugins.

    import run from "./app/reactPluginRunner";

    const pluginPaths = [
      "plugins/counter/CounterPlugin",
      "plugins/jsonplaceholder/Plugin"
    ];

    run(pluginPaths);

## Plugin description

Each plugin path points to a module with a plugin default export that contains the plugin id, the mainComponent and optionally a reducer.

    const plugin = {
      id: "counter",
      mainComponent: <Counter />,
      reducer: counterReducer
    };

    export default plugin;

If a plugin contains a reducer, it is configured under the id of the plugin. The plugin's id is used as the Redux slice's name.

The main component will be rendered in the [public/index.html](public/index.html) under the element with that id. E.g.

    <div id="counter">
   
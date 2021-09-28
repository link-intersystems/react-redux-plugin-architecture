import ReactDOM from "react-dom";

function render({ plugins, render }) {
  plugins.forEach((plugin) => {
    console.log("Init plugin", plugin);

    const pluginSlot = getPluginSlot(plugin);

    if (pluginSlot == null) {
      console.error(`Unable to find target for plugin ${plugin.id}`);
      return;
    }

    ReactDOM.render(render(plugin.mainComponent), pluginSlot);
  });
}

function getPluginSlot(plugin) {
  return  document.getElementById(plugin.id);
}

export default render;

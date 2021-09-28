import ReactDOM from "react-dom";

function defaultRender(component) {
  return component;
}

function render({ plugins, render }) {
  if (render == null) {
    render = defaultRender;
  }

  plugins.forEach((plugin) => {
    const pluginSlot = getPluginSlot(plugin);

    if (pluginSlot == null) {
      console.error(`Unable to find target for plugin ${plugin.id}`);
      return;
    }

    try {
      ReactDOM.render(render(plugin.mainComponent), pluginSlot, () => {});
    } catch (e) {}
  });
}

function getPluginSlot(plugin) {
  return document.getElementById(plugin.id);
}

export default render;

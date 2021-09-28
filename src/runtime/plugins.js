async function loadPlugins(pluginPaths) {
  console.log("loadPlugins", pluginPaths);
  return await Promise.all(
    pluginPaths.map(
      async (pluginPath) =>
        await import(
          /* webpackChunkName: "[request]" */
          `../plugins/${pluginPath}`
        )
    )
  ).then((pluginModules) => {
    console.log("Loaded plugin modules", pluginModules);

    const defaultExport = (p) => {
      console.log(p);
      return p.default;
    };
    const plugins = pluginModules.map(defaultExport);

    return {
      plugins,
    };
  });
}

export default loadPlugins;

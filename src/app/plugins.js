async function loadPlugins(pluginPaths) {
  return await Promise.all(
    pluginPaths.map(async (pluginPath) => await import("../" + pluginPath))
  ).then((importedPluigins) => {
    const defaultExport = (p) => p.default;
    const plugins = importedPluigins.map(defaultExport);
    return plugins;
  });
}

export default loadPlugins;

async function logPlugins({ plugins, ...others }) {
  plugins.forEach((plugin) => {
    console.log("Plugin", plugin);
  });
  return {
    ...others,
    plugins,
  };
}

export default logPlugins;

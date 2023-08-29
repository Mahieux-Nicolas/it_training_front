module.exports = {
    // ... autres propriétés de configuration
  
    resolve: {
      fallback: {
        "util": require.resolve("util/") // Ajoutez le polyfill pour le module 'util'
      }
    }
  };
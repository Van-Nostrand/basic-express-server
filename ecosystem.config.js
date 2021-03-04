module.exports = {
  apps : [{
    name: "scoutberry",
    script: 'index.js',
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};

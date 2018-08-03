
const env = process.env.ENV || "local";
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

if (env === 'local') {
  module.exports = {
    ENV: JSON.stringify("local"),
    API_HOST: JSON.stringify("localhost"),
    API_PORT: port,
  };
} else {
  module.exports = {
    ENV: JSON.stringify(process.env.ENV),
    API_HOST: JSON.stringify(process.env.API_HOST),
    API_PORT: port,
  }
}
var settings = {
    host: require('os').hostname()
  // , port: 3000
};

if (process.env.NODE_ENV == 'production') {
  settings.port = 3010;
}

if (process.env.HOSTING == 'cloudnode') {
  settings.port = process.env.PORT;
}

module.exports = settings;

var server = require('universal-webpack').server;
var settings = require('./webpack/universal-webpack-settings');
var configuration = require('./webpack/webpack.config');
global.__ROOT__ = __dirname;
server(configuration, settings);

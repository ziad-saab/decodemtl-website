var server = require('./build/server/server').default;
var chunks = require('./build/assets/webpack-chunks.json');
global.__ROOT__ = __dirname;
server({
  chunks: function() {return chunks;}
});

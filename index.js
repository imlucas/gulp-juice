var es = require('event-stream'),
    gutil = require('gulp-util'),
    juiceContent = require('juice').juiceContent,
    File = gutil.File,
    PluginError = gutil.PluginError,
    crypto = require('crypto');

module.exports = function(options){
  options = options || {};
  return es.map(function(file, fn){
      options.url = 'file://' + file.path;
      juiceContent(file.contents, options, function(err, html){
        if(err) return fn(err);
        file.contents = new Buffer(html);
        fn(null, file);
      });
    });
};

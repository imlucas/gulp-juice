var through = require('through'),
    gutil = require('gulp-util'),
    juice = require('juice'),
    File = gutil.File,
    crypto = require('crypto');

module.exports = function(options){
  options = options || {};

  return through(function(file){
    if(file.isNull()) return;
    var self = this;

    juice(file.path, function(err, html) {
      self.emit('data', new File({
        contents: new Buffer(html),
        path: file.path
      }));
    });
  });
};

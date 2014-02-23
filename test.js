var juice = require('./'),
    assert = require('assert'),
    fs = require('fs'),
    gutil = require('gulp-util');

describe('gulp-juice', function() {
  it('should work in buffer mode', function(done) {
    var buf = fs.readFileSync('./test.html'),
        juice = require('./')({}).on('data', function(file){
        var html = file.contents.toString();
        assert(html.indexOf('<style') === -1,
            'after juicing should have no style tag');
    }).on('end', done);

    assert(buf.toString().indexOf('<style') > -1,
        'should originally have style tag');

    juice.write(new gutil.File({
        contents: buf,
        path: 'test.html'
    }));

    juice.end();
  });
});

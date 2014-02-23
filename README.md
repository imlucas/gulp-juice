# gulp-juice

[![build status](https://secure.travis-ci.org/imlucas/gulp-juice.png)](http://travis-ci.org/imlucas/gulp-juice)

Stream html files through [juice](https://www.npmjs.org/package/juice) to
inline CSS.

## Examples

```
var juice = require('gulp-juice');

gulp.task('bootloader', function(){
  gulp.src('./.build/bootloader.html')
    .pipe(juice({}))
    .pipe(gulp.dest('./.build/bootloader.inline.html'));
});

gulp.task('deploy', ['build', 'manifest', 'bootloader', 'publishtoS3']);
```

Protip when using with a template renderer: need to pipe to dest first as
you probably want `juice` resolving css relative to our actual build output:

```
var juice = require('gulp-juice'),
  jade = require('gulp-jade');

gulp.task('bootloader', function(){
  gulp.src('./app/templates/bootloader.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./.build'))
    .pipe(juice())
    .pipe(gulp.dest('./.build'));
});

gulp.task('deploy', ['build', 'manifest', 'bootloader', 'publishtoS3']);
```

## License

MIT

# gulp-juice

[![build status](https://secure.travis-ci.org/imlucas/gulp-juice.png)](http://travis-ci.org/imlucas/gulp-juice)

Stream html files through [juice](https://www.npmjs.org/package/juice) to
inline CSS.

```
var juice = require('gulp-juice');

gulp.task('bootloader', function(){
  gulp.src('./.build/bootloader.html')
    .pipe(juice({}))
    .pipe(gulp.dest('./.build/bootloader.inline.html'));
});

gulp.task('deploy', ['build', 'manifest', 'bootloader', 'publishtoS3']);
```

## License

MIT

const gulp = require('gulp');
const ava = require('gulp-ava');
const babel = require('gulp-babel');
const xo = require('gulp-xo');

const paths = {
  scripts: ['src/**/*.js', 'src/**/*.jsx'],
  tests: 'test/**/test*.js'
};

gulp.task('build', () =>
  gulp.src(paths.scripts)
    .pipe(babel({
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        'transform-runtime',
        'transform-decorators-legacy'
      ]
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('lint', () =>
  gulp.src(paths.scripts)
    .pipe(xo())
);

gulp.task('test', () =>
	gulp.src(paths.tests)
		.pipe(ava())
);

gulp.task('watch', () => {
  gulp.watch(paths.tests, ['test']);
  gulp.watch(paths.scripts, ['lint', 'build']);
});

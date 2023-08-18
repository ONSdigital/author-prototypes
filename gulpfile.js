import gulp from 'gulp';
import definePrototypeKitGulpTasks from '@ons/prototype-kit/defineGulpTasks.js';

definePrototypeKitGulpTasks(gulp);

gulp.task('copy-static-files', () => {
    return gulp.src('./src/prototypes/example/homepage/data/**/*').pipe(gulp.dest('./build'));
  });

gulp.task('build-assets', gulp.series('copy-static-files'));

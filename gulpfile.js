const gulp = require("gulp");

const files = ["id", "oddnumber"];

gulp.task("test", ["concat", "mocha"]);

gulp.task("mocha", () => {
  const mocha = require('gulp-mocha');
  return gulp.src("./test/*_test.js", {read: false})
    .pipe(mocha());
});

gulp.task("concat", () => {
  const concat = require('gulp-concat');
  return files.map(id => {
    const js = `./js/${id}.js`;
    const spec = `./spec/${id}_spec.js`;
    const test = `${id}_test.js`;
    console.log(`concat ${js} and ${spec}`);

    return gulp.src([js, spec])
      .pipe(concat(test))
      .pipe(gulp.dest("./test/"));
  });
});

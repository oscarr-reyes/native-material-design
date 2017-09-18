var gulp   = require("gulp");
var concat = require("gulp-concat-util");

gulp.task("js", () => {
	return gulp.src("src/javascript/**/*.js")
		.pipe(concat("native-material.js", {sep: "\n\n"}))
		.pipe(gulp.dest("./build/"));
});
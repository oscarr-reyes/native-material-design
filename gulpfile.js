var gulp   = require("gulp");
var concat = require("gulp-concat-util");
var minify = require("gulp-minify");
var rename = require("gulp-rename");

gulp.task("js", () => {
	return gulp.src("src/javascript/**/*.js")
		.pipe(concat("native-material.js", {sep: "\n\n"}))
		.pipe(gulp.dest("./build/"))
		.pipe(minify({
			ext: {
				min: ".min.js"
			}
		}))
		.pipe(gulp.dest("./build/"));
});
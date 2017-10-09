var gulp   = require("gulp");
var concat = require("gulp-concat-util");
var minify = require("gulp-minify");
var rename = require("gulp-rename");
var sass   = require("gulp-sass");

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

gulp.task("css", () => {
	let sassOptions = {
		outputStyle: "expanded"
	};

	return gulp.src("src/stylesheet/native-material.scss")
		.pipe(sass(sassOptions).on("error", sass.logError))
		.pipe(gulp.dest("./build/stylesheet/"));
});

gulp.task("css:watch", () => {
	return gulp.watch("src/stylesheet/**/*.scss", ["css"]);
});
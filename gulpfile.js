var gulp = require('gulp'),
    scss = require('gulp-sass'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    webpack = require('webpack'),
    bs = require('browser-sync'),
    concat = require('gulp-concat'),
	webpackStream = require('webpack-stream'),
	notify = require('gulp-notify');

const pathJS = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery-background-video/jquery.background-video.js',
	'node_modules/owl.carousel/dist/owl.carousel.min.js'
];

gulp.task('pug', function () {
	gulp.src('app/_pug/*.pug')
	    .pipe(plumber())
	    .pipe(pug({
      				pretty: true
    	}))
	    .pipe(gulp.dest('dist/'));
});

gulp.task('scss', function () {
  gulp.src('app/_scss/**/*.scss')
  	.pipe(plumber())
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('server',function(){
    bs({
        port: 9000,
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('jsLibs', function() {
	return gulp.src(pathJS)
	  .pipe(concat('foundation.js'))
	  .pipe(gulp.dest('dist/js/'))
});

gulp.task('jsBuild', () => {
	var options =  {
			watch: true,
			output: {
			  filename: 'main.js',
			  library: 'app'
			},
			devtool: "source-map",
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						query: {
							presets: ['es2015']
						}
					}
				]
			},
			plugins: [
/*				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false,
						drop_console: true,
						unsafe: true
					}
				}),
				new webpack.NoEmitOnErrorsPlugin()
				*/
			]
		};
	return gulp.src('app/js/main.js')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Webpack',
				message: err.message
			}))	
		}))
		.pipe(webpackStream(options,webpack))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('imgCopy', () => {
	gulp.src('app/img/*')
		.pipe(gulp.dest('dist/img/'));
	gulp.src('app/pictures/*')
		.pipe(gulp.dest('dist/pictures/'));
});
gulp.task('copyData', () => {
	gulp.src('app/data/*')
		.pipe(gulp.dest('dist/data/'));
});

gulp.task('watch', function(){
	gulp.watch([
			'dist/*.html',
			'dist/js/*.js',
			'dist/css/*.css'
	]).on('change', bs.reload);
	gulp.watch('app/_scss/**/*',['scss']);
	gulp.watch('app/_pug/**/*',['pug']);
});

gulp.task('default',['server','watch','jsLibs','imgCopy', 'copyData', 'jsBuild']);
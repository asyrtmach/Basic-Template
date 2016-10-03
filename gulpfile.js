 // JavaScript Document
var gulp = require('gulp'),
concat = require('gulp-concat'), // Объединение файлов
cssmin = require('gulp-cssmin'), // Минификация CSS
uglify = require('gulp-uglify'), // Минификация js
rename = require('gulp-rename'), // Добавление .min
pump = require('pump'), // Вместо .pipe()
autoprefixer = require('gulp-autoprefixer'),
browserSync = require('browser-sync'),
mainBowerFiles = require('main-bower-files'),


//'dev/sass/**/*.+(scss|sass)'
devCss = 'dev/css/**/*.css', // Css файлы разработки
devJs = 'dev/js/**/*.js',    // Js файлы разработки

distCss = 'css',    // Директория скомпелированных Css
distJs = 'js',      // Директория скомпелированных Js
fileCss = 'style.css',   // Скомпелированный файл Css
fileJs = 'main.js',// Скомпелированный файл Js
min = '.min';            // Имя минифицированного файла


// Запуск тасков по умолчанию при вводе в консоли gulp 
gulp.task('default', [
	'cssMin',
	'jsUglify',
	'browserSync',
	'watch'
	//'mainBowerFilesCss',
	//'mainBowerFilesJs'
]);

// Сервер +
gulp.task('browserSync', function () {
	browserSync({
		//proxy    : 'my-remote-domain.com',
		server: {
			baseDir: '.'
		},
		notify: false
	});
});

// Устанавливаем слежение за изменением файлов
gulp.task('watch', function () {
    gulp.watch(devCss, ['cssMin']);
    gulp.watch(devJs, ['jsUglify']);
    gulp.watch('*.+(html|php)', browserSync.reload);
});

// Минификация и объеденение Css
gulp.task('cssMin', function () {
    gulp.src(devCss)
	//.pipe(plumber())
	.pipe(autoprefixer())
	.pipe(cssmin())
	.pipe(concat(fileCss))
	.pipe(rename({suffix: min}))
	.pipe(gulp.dest(distCss))
	.pipe(browserSync.reload({stream: true}));
});

// Минификация и объеденение Js
gulp.task('jsUglify', function (cb) {
  pump([
        gulp.src(devJs),
		//plumber(),
        uglify(),
    	concat(fileJs),
		rename({suffix: min}),
        gulp.dest(distJs),
		browserSync.reload({stream: true})
    ],
    cb
  );
});







//gulp.task('mainBowerFilesCss', function () {
	//return gulp.src(mainBowerFiles('**/*.css', {
		//"overrides": {
			//"bootstrap": {
				//"main": [
					//distCss+"/bootstrap.min.css"
				//]
			//}
		//}
	//}))
	//.pipe(gulp.dest(distCss));
//});

//gulp.task('mainBowerFilesJs', function () {
	//return gulp.src(mainBowerFiles('**/*.js', {
		//"overrides": {
			//"bootstrap": {
				//"main": [
					//distJs+"/bootstrap.min.js"
				//]
			//},
			//"jquery": {
				//"ignore": true
			//}
		//}
	//}))
	//.pipe(gulp.dest(distJs));
//});


//var plumber = require('gulp-plumber'); // Ловля ошибок
//var gutil = require('gulp-util');
//var watch = require('gulp-watch'); // Можно не подключать присутствует в Gulp по дефолту
// Webserver + livereload
/*
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
			//host: '127.0.0.1',
      livereload: true,
      //directoryListing: true,
      open: true
    }));
});
*/
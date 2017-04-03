/**
 * ASYRTMACH
 */
const   gulp   		 = require('gulp'),
		concat 		 = require('gulp-concat'),			 // Объединение файлов
		cssmin 		 = require('gulp-cssmin'),			 // Минификация CSS
		uglify   	 = require('gulp-uglify'), 			 // Минификация js
		rename   	 = require('gulp-rename'),			 // Добавление .min
		pump   		 = require('pump'), 	 			 // Вместо .pipe()
		del   		 = require('del'), 				     // Удаление
		autoprefixer = require('gulp-autoprefixer'),
		sourcemaps   = require('gulp-sourcemaps'),       // Соурс файл
		gulpIf 		 = require('gulp-if'),               // Условия if
		browserSync  = require('browser-sync').create(),


		isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development',

		// примеры паттерна поиска
 	     // [
			//  '**/*.html',
			//  'dev/sass/**/*.{scss,sass}'
         // ]
 		devCss 	= 'assets/_dev/**/*.css', 	// Css файлы разработки
		devJs 	= 'assets/_dev/**/*.js',    // Js файлы разработки

		distCss = 'assets/css',    			// Директория скомпелированных Css
		distJs  = 'assets/js',    			// Директория скомпелированных Js

		fileCss = 'style.css',   			// Скомпелированный файл Css
		fileJs  = 'main.js',   				// Скомпелированный файл Js
		min 	= '.min';            		// Имя минифицированного файла


// Сервер +
gulp.task('browser-sync', function () {
	browserSync.init({
		proxy    : 'basic-template',
		/*server: {
			baseDir: '.'
		},*/
		notify: false
	});
});


// Минификация и объеденение Css
gulp.task('styles', function () {
	return gulp.src(devCss)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(concat(fileCss))
		.pipe(rename({suffix: min}))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest(distCss))
		.pipe(browserSync.stream());
});

// Минификация и объеденение Js с помощью pump
gulp.task('scripts', function (cb) {
  pump([
		gulp.src(devJs),
		gulpIf(isDevelopment, sourcemaps.init()),
		uglify(),
		concat(fileJs),
		rename({suffix: min}),
		gulpIf(isDevelopment, sourcemaps.write()),
		gulp.dest(distJs),
		browserSync.stream()
    ],
    cb
  );
});

 // удаление папок перед сборкой
 gulp.task('clean', function () {
     return del([
     	 'assets/css',
		 'assets/js'
	 ]);
 });

 // Устанавливаем слежение за изменением файлов
 gulp.task('watch', function () {
     gulp.watch(devCss, ['styles']);
     gulp.watch(devJs, ['scripts']);
     gulp.watch('**/*.{html,php}').on('change', browserSync.reload);
 });

 // Запуск тасков по умолчанию при вводе в консоли gulp
 gulp.task('build', [
	 //gulp.series(
 	 'clean',
	  //gulp.parallel(
	 'styles',
	 'scripts',
	 	//),
     'browser-sync',
     'watch'
	 //)
 ]);
 // Запуск тасков по умолчанию при вводе в консоли gulp
 gulp.task('default', ['build']);

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


//var gutil = require('gulp-util');
//var watch = require('gulp-watch'); // Можно не подключать присутствует в Gulp по дефолту

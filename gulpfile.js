const gulp = require('gulp');
const less = require('gulp-less');

// Ruta de los archivos LESS y CSS
const paths = {
    styles: {
        src: 'src/less/**/*.less', // Ruta a tus archivos LESS
        dest: 'dist/css' // Ruta donde se guardarán los archivos CSS compilados
    }
};

// Tarea para compilar LESS a CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(gulp.dest(paths.styles.dest));
}

// Tarea para observar cambios en los archivos LESS
function watchFiles() {
    gulp.watch(paths.styles.src, styles);
}

// Tarea por defecto que compila y observa
const build = gulp.series(styles, watchFiles);

exports.styles = styles;
exports.watch = watchFiles;
exports.default = build;

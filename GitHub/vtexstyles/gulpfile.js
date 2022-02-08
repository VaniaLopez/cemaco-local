const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      concat = require('gulp-concat'),
      minifyCSS = require('gulp-minify-css'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename');

const fs = require('fs');

var dest = {
    css: './min/css',
    js: './min/js/',
}

/**
 * Fetch command line arguments
 */
const arg = (argList => {
    let arg = {}, a, opt, thisOpt, curOpt;

    for (a = 0; a < argList.length; a++) {
        thisOpt = argList[a].trim();
        opt = thisOpt.replace(/^\-+/, '');
    
        if (opt === thisOpt) {
            // argument value
            if (curOpt) arg[curOpt] = opt;
            curOpt = null;
        }
        else {
            // argument name
            curOpt = opt;
            arg[curOpt] = true;
        }
    }
  
    return arg;
})(process.argv);

/**
 * Task para minificar css y js en especificos
 * --files - path de archivos separados por comas
 * --output - path en donde van a ser insertados los minificados - No incluido aún
 */
gulp.task('minify-specific', () => {
    if(arg.files){
        const files = arg.files.split(',')
        console.log(files, files.includes('js'))

        for (let index = 0; index < files.length; index++) {
            const file = files[index].replace(' ','')
            let output = dest.js

            if (!file.includes('.js') && !file.includes('.css'))
                return Promise.reject('Invalid extension file');

            if (file.includes('.js')){
                if( !fs.existsSync(file) )
                    return Promise.reject(`The given file ${file} does not exist`)

                gulp.src(file)
                    .pipe(uglify({
                        mangle: {
                            eval: false,
                            toplevel: false,
                            // reserved: ['product_mpn']
                        }
                    }))
                    .pipe(rename({
                        suffix: '.min',
                    }))
                    .pipe(gulp.dest(output));
            }

            if (file.includes('.css')){
                if( !fs.existsSync(file) )
                    return Promise.reject(`The given file ${file} does not exist`)

                gulp.src(file)
                    .pipe(minifyCSS())
                    .pipe(rename({
                        suffix: '.min',
                    }))
                    .pipe(gulp.dest(dest.css));
            }
        }

        return Promise.resolve('resolved')  
    }

    return Promise.reject('Command expects --files param, Please see readme.md file for more information');
})

/**
 * Minifica todos los css 
 */
gulp.task('minify-css', () => {
    gulp.src(['./xCemaco-styles/*.css'])
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest(dest.css));

    gulp.src(['./css/cemaco*.css', '!./css/cemaco_instalaciones.css', '!./css/cemaco_bebejugueton.css'])
        .pipe(minifyCSS())
        .pipe(concat('cemaco.min.css'))
        .pipe(gulp.dest(dest.css));
    
    // gulp.src(['./css/home.*.css'])
    //     .pipe(minifyCSS())
    //     .pipe(rename({
    //         suffix: '.min',
    //     }))
    //     .pipe(gulp.dest(dest.css));

    return Promise.resolve('resolved')
})

// Scripts from xCemaco-footer
gulp.task('minify-js', () => {
    gulp.src('xCemaco-scripts/jquery.ui.*.js')
        .pipe(concat('jquery.ui.min.js'))
        .pipe(uglify({
            mangle: {
                eval: false,
                toplevel: false
            }
        }))
        .pipe(gulp.dest(dest.js));

    gulp.src(['xCemaco-scripts/plugins*.js', '!xCemaco-scripts/plugins_slick_slick.min.js'])
        .pipe(concat('plugins.min.js'))
        .pipe(uglify({
            mangle: {
                eval: false,
                toplevel: false
            }
        }))
        .pipe(gulp.dest(dest.js));

    gulp.src(['xCemaco-scripts/css-js*.js', '!xCemaco-scripts/css-js_newsletter.min.js', '!xCemaco-scripts/css-js_re-app.min.js', '!xCemaco-scripts/css-js_re-app.min_backup.js'])
        .pipe(concat('css-js_minified.min.js'))
        .pipe(uglify({
            mangle: {
                eval: false,
                toplevel: false
            }
        }))
        .pipe(gulp.dest(dest.js));
    
    gulp.src(['xCemaco-scripts/vtex*.js'])
        .pipe(concat('vtex_comm_view.min.js'))
        .pipe(uglify({
            mangle: {
                eval: false,
                toplevel: false
            }
        }))
        .pipe(gulp.dest(dest.js));

    gulp.src(['xCemaco-scripts/cemaco-scripts.js'])
        .pipe(concat('cemaco-scripts.min.js'))
        .pipe(uglify({
            mangle: {
                eval: false,
                toplevel: false
            }
        }))
        .pipe(gulp.dest(dest.js));

    return Promise.resolve('scripts added')
})

gulp.task('watch', function() {
    gulp.watch('css/*.css', gulp.series('minify-css'))
    gulp.watch('xCemaco-styles/*.css', gulp.series('minify-css'))
    gulp.watch('./**/*.scss', gulp.series('sass'))
})

gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest(dest.css));
})

// gulp.task('clean', () => {
//     return del([
//         dest.css,
//         dest.js,
//     ]);
// });

gulp.task('default', gulp.series(['minify-js', 'minify-css', 'sass']));
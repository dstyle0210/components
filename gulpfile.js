const {src,dest,task} = require("gulp");
const sass = require("gulp-sass")( require("sass") );


task("sass",function(done){
    return src("./src/**/*.scss")
    .pipe(sass())
    .pipe(dest("./src"))
    .on("end",function(){
        done();
    });
});
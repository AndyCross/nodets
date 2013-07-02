module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        typescript: {
            app: {
                src: ["app/app.ts"],
                dest: "app/app.js",
                options: {
                    ES5: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.registerTask('default', ['typescript']);
}
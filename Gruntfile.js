module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        typescript: {
            app: {
                src: ["app/app.ts"],
                dest: "./dist/",
                options: {
                    ES5: true
                }
            }
        },
      nodemon: {
          dev: {
            options: {
              file: 'dist/app/app.js',
              env: {
                PORT: '8181'
              }
            }
          }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['typescript']);
}
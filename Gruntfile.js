module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        typescript: {
            app: {
                src: ["server/server.ts"],
                dest: "./dist/",
                options: {
                    ES5: true
                }
            }
        },
      nodemon: {
          dev: {
            options: {
              file: 'dist/server/server.js'
            }
          }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['typescript']);
}
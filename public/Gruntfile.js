module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
        }
    },
    karma: {
        unit: {
            options: {
              files : [
                'app/lib/angular/angular.js',
                'app/lib/angular/angular-*.js',
                'test/lib/angular/angular-mocks.js',
                'app/js/**/*.js',
                'test/unit/**/*.js'
              ],
            },
            configFile: 'config/karma.conf.js'
        },
        //continuous integration mode: run tests once in PhantomJS browser and exit
        continuous: {
            configFile: 'config/karma.conf.js',
            singleRun: true,
            browsers: ['PhantomJS']
        }
    }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};

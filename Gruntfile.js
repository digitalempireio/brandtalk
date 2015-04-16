module.exports = function(grunt) {

  // Load Grunt config files from 'grunt' folder.
  require('load-grunt-config')(grunt, {
    data: {
      paths: {
        temp: 'temp',
        dev: 'dev',
        dist: 'dist'
      }
    }
  });

  // Register tasks.
  grunt.registerTask('dev', ['clean', 'copy:dev', 'preprocess:dev', 'imagemin:dev', 'sass:dev', 'autoprefixer:dev', 'emberTemplates:dev', 'jshint', 'uglify:dev_vendor', 'uglify:dev_app']);
  grunt.registerTask('dist', ['clean', 'copy:dist', 'preprocess:dist', 'imagemin:dist', 'sass:dist', 'autoprefixer:dist', 'emberTemplates:dist', 'jshint', 'uglify:dist', 'clean:temp']);

  grunt.registerTask('default', ['dev', 'connect:dev', 'watch']);
};

module.exports = {
  options: {
    sourceMap: false,
    screwIE8: true
  },
  dev_vendor: {
    options: {
      beautify: true,
      mangle: false,
      compress: false
    },
    files: [
      { '<%= paths.dev %>/assets/js/vendor.js' : ['bower_components/jquery/dist/jquery.min.js', 'bower_components/ember/ember.debug.js'] },
    ]
  },
  dev_app: {
    options: {
      beautify: true,
      mangle: false,
      compress: false
    },
    files: [
      { '<%= paths.dev %>/assets/js/app.js' : ['app/app.js', 'app/router.js', 'app/models/**/*.js', 'app/routes/**/*.js', 'app/controllers/**/*.js', 'app/views/**/*.js', 'app/components/**/*.js', 'app/helpers/**/*.js'] }
    ]
  },
  dist: {
    files: [
      { '<%= paths.dist %>/assets/js/app.js' : ['bower_components/jquery/dist/jquery.min.js', 'bower_components/ember/ember.min.js', 'temp/templates.js', 'app/app.js', 'app/router.js', 'app/models/**/*.js', 'app/routes/**/*.js', 'app/controllers/**/*.js', 'app/views/**/*.js', 'app/components/**/*.js', 'app/helpers/**/*.js'] }
    ]
  }
};

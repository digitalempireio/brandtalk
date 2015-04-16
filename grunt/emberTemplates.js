module.exports = {
  options: {
    templateBasePath: 'app/templates/'
  },
  dev: {
    files: {
      '<%= paths.dev %>/assets/js/templates.js' : ['app/templates/**/*.hbs']
    }
  },
  dist: {
    files: {
      '<%= paths.temp %>/templates.js' : ['app/templates/**/*.hbs']
    }
  }
};

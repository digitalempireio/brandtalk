module.exports = {
  options: {
    sourcemap: 'none',
    require: 'sass-globbing'
  },
  dev: {
    files: {
      '<%= paths.dev %>/assets/css/app.css' : 'app/styles/app.scss'
    }
  },
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= paths.dist %>/assets/css/app.css' : 'app/styles/app.scss'
    }
  }
};

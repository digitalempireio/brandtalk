module.exports = {
  dev: {
    options: {
      context: {
        DEV: true
      }
    },
    files: {
      '<%= paths.dev %>/index.html' : 'app/index.html'
    }
  },
  dist: {
    options: {
      context: {
        DIST: true
      }
    },
    files: {
      '<%= paths.dist %>/index.html' : 'app/index.html'
    }
  }
};

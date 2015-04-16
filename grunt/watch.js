module.exports = {
  options: {
    livereload: true
  },
  public: {
    files: ['public/**/*'],
    tasks: ['newer:copy:dev']
  },
  tests: {
    files: ['tests/**/*'],
    tasks: ['newer:copy:dev']
  },
  html: {
    files: ['app/**/*.html'],
    tasks: ['preprocess:dev']
  },
  images: {
    files: ['app/images/**/*.{png,gif,jpg}'],
    tasks: ['newer:imagemin:dev']
  },
  styles: {
    files: ['app/styles/**/*.scss'],
    tasks: ['sass:dev', 'autoprefixer:dev']
  },
  templates: {
    files: ['app/templates/**/*.hbs'],
    tasks: ['emberTemplates:dev']
  },
  scripts: {
    files: ['app/**/*.js'],
    tasks: ['uglify:dev_app']
  }
};

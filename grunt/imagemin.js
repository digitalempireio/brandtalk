module.exports = {
  dev: {
    files: [
      { cwd: 'app/images', src: ['**/*.{png,gif,jpg}'], dest: '<%= paths.dev %>/assets/img/', expand: true }
    ]
  },
  dist: {
    files: [
      { cwd: 'app/images', src: ['**/*.{png,gif,jpg}'], dest: '<%= paths.dist %>/assets/img/', expand: true }
    ]
  }
};

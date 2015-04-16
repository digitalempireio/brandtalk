module.exports = {
  dev: {
    files: [
      { cwd: 'public', src: ['**/*'], dest: '<%= paths.dev %>', expand: true },
      { cwd: 'tests', src: ['**/*'], dest: '<%= paths.dev %>/tests', expand: true }
    ]
  },
  dist: {
    files: [
      { cwd: 'public', src: ['**/*'], dest: '<%= paths.dist %>', expand: true }
    ]
  }
};

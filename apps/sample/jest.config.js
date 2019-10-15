module.exports = {
  name: 'sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sample',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

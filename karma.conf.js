const webpackConfig = require('./webpack.config');
const karmaWebpack  = require('karma-webpack');

// Remove entry and output to allow testing
/* eslint-disable prefer-reflect */
delete webpackConfig.entry;
delete webpackConfig.output;

module.exports = (config) => {
  config.set({
    basePath: '',

    plugins: [
      karmaWebpack,
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],

    client: {
      captureConsole: true
    },

    frameworks: ['mocha'],

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    files: [
      './spec/root.js'
    ],

    preprocessors: {
      './spec/root.js': ['webpack', 'sourcemap']
    },

    mochaReporter: {
      output: 'minimal'
    },
    reporters: ['mocha'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

import path from 'path';

export default {
  input: {
    index: path.resolve(__dirname, './index.js'),
    utils: path.resolve(__dirname, './utils.js'),
  },
  output: [{
    dir: 'dist',
    entryFileNames: '[name].es.js',
    format: 'es',
  }],
  external: id => id === 'lodash-es',
  treeshake: {
    moduleSideEffects: false,
  },
};

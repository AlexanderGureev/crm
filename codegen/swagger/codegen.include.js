// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js');

let include = [
  'products-test',
  // 'Products', // tagName
  // 'Estimates',//tagName
  { User: ['history'] }
];
codegen({
  methodNameMode: 'path',
  strictNullChecks: false,
  modelMode: 'interface',
  source: require('../swagger.json.js'),
  outputDir: './swagger/services',
  include
});

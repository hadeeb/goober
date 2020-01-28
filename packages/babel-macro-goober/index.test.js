const path = require('path');
const { create } = require('babel-test');

const { fixtures } = create({
    plugins: [require.resolve('babel-plugin-macros')]
});

fixtures('babel-macro-goober', path.join(__dirname, '__fixtures__'));

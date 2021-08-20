const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
module.exports = {
    target: 'node',
    entry: [path.join(projectRoot, 'serverEntry.js')],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(projectRoot, 'dist'),
        filename: 'bundle.server.js',
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }
        ]
    },
    plugins: [],
    resolve: {
        alias: {
        }
    }
}
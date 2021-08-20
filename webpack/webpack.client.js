const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
module.exports = {
    entry: [path.join(projectRoot, 'clientEntry.js')],
    output: {
        path: path.join(projectRoot, 'dist'),
        filename: 'bundle.client.js',
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
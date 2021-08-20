const express = require('express')
const expressApp = express()
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default']

const clientBundle = '/bundle.client.js'

expressApp.use('/', express.static(__dirname + '/dist'))


expressApp.get('/api/getUserInfo', (req, res) => {
    res.send("{name:'test'}")
})

expressApp.get('*', (req, res) => {
    const context = { url: req.url }
    createApp(context).then(app => {
        let state = JSON.stringify(context.state)
        renderer.renderToString(app, (err, html) => {
            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>单页面应用的服务端渲染</title>
                        <script>window.__INITIAL_STATE__ = ${state}</script>
                        <script src="${clientBundle}"></script>
                    </head>
                    <body>
                        <div id="app">${html}</div>
                    </body>
                </html>
            `)
        })
    }).catch(err => {
        if (err.code === 404) { res.status(404).end('页面不存在') }
    })

})

expressApp.listen(8080, "0.0.0.0", () => {
    console.log('服务器已启动！')
})

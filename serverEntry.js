import { createApp } from './main'

//创建vue实例，并且通过请求的url找到对应要渲染的组件，并放进路由，然后返回app实例
export default context => {
    return new Promise((resolve, reject) => {
        const app = createApp()
        app.$router.push(context.url)
        const matchedComponents = app.$router.getMatchedComponents()
        if (!matchedComponents.length) { return reject({ code: 404 }) }

        Promise.all(matchedComponents.map(component => {
            if (component.beforeServerRender) {
                return component.beforeServerRender(app.$store)
            }
        })).then(() => {
            context.state = app.$store.state
            resolve(app)
        }).catch((err) => {
            reject(err)
        })
    })
}
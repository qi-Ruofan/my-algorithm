// const PV_URL_SET = new Set()
// class MyStatistic {
//     constructor(productId) {
//         this.productId = productId
//         this.initPerformance() // 初始化性能统计
//         this.initError()
//     }
//     private productId = ""
//     // 初始化性能统计
//     private initPerformance() {
//         const url = 'yyy'
//         this.send(url, performance.timing)
//     }
//     // 发送数据
//     private send(url, params = {}) {
//         params.productId = this.productId
//         const paramArr = []
//         for(let key in params) {
//             const val = params[key]
//             paramArr.push(`${key}=${value}`)
//         }
//         const newUrl = `${url}?${paramArr.join('&')}`

//         // img发送可跨域 兼容好
//         const img = document.createElement('img')
//         img.src = newUrl
//     }
//     // 初始化错误监控
//     private initError() {
//         // send
//         window.addEventListener('error', event => {
//             const {error, lineno, colno} = event
//             this.error(error, {lineno, colno})
//         })

//         // promise未catch住的报错
//         window.addEventListener('unhandledrejection', event => {
//             this.error(new Error(event.reason), {type: 'unhandledrejection'})
//         })
//     }
//     pv() {
//         const href = location.href
//         if(PV_URL_SET.get(href)) return // 不充分发送pv
//         // 特殊的event
//         this.event('pv')
//         PV_URL_SET.add(href)
//         // send 
//     }
//     event(key, val) {
//         // send
//         const url = 'xxx' // 自定义事件统计的API
//         this.send(url, {key, val})



//     }
//     error(err, info = {}) {
//         const url = 'zzz'
//         const {message, stack} = err
//         this.send(url, {message, stack, ...info})

//     }
// }

// const s = new MyStatistic('a1')
// s.pv() // SPA 路由切换 pv
// s.event('vip', 'ok')

// try {

// } catch(ex) {
//     s.error(ex, {})
// }

class EventBus {
    private events: {
        [key: string]: Array<{fn: Function, isOnce:boolean}>
    }
    constructor() {
        this.events = {}
    }

    on(type: string, fn:Function, isOnce:boolean = false) {
        const events = this.events
        if(events[type] == null) {
            events[type] = [] //初始化key的fn数组
        }
        events[type].push({ fn, isOnce })
    }

    once(type: string, fn:Function) {
        this.on(type, fn, true)
    }

    off(type: string, fn:Function) {
        if(!fn) {
            //解绑所有type的函数
            this.events[type] = []
        } else {
            // 解绑单个fn
            const fnList = this.events[type]
            if(fnList) {
                this.events[type] = fnList.filter((item) => item.fn !== fn);
            }
        }
    }

    emit(type: string, ...args: any[]) {
        const fnList = this.events[type]
        if(fnList == null) return 
        // 注意
        this.events[type] = fnList.filter((item) => {
            const {fn, isOnce} = item
            fn(...args)

            //once执行一次要被过滤掉
            if(!isOnce) return true
            return false
        });
    }
}


const e = new EventBus()
function fn6(a: any, b:any) { console.log('fn1', a, b) }
function fn7(a: any, b:any) { console.log('fn2', a, b) }
function fn8(a: any, b:any) { console.log('fn3', a, b) }

e.on('key1', fn6)
e.on('key1', fn7)
e.once('key1', fn8)
e.on('xxxxx', fn8)

e.emit('key1', 10,20) // 触发fn1 fn2 fn3
e.off('key1', fn6)
e.emit('key1', 100,200) // 触发fn2

/**
 * @description 拆分保存 on 和 once
 */

class EventBus2 {
    private events: { [key: string]: Array<Function> }
    private onceEvents: { [key: string]: Array<Function> }
    constructor() {
        this.events = {}
        this.onceEvents = {}
    }

    on(type: string, fn:Function) {
        const events = this.events
        if(events[type] == null) {
            events[type] = [] //初始化key的fn数组
        }
        events[type].push(fn)
    }

    once(type: string, fn:Function) {
        const onceEvents = this.onceEvents
        if(onceEvents[type] == null) onceEvents[type] = []
        onceEvents[type].push(fn)
    }

    off(type: string, fn:Function) {
        if(!fn) {
            this.events[type] = []
            this.onceEvents[type] = []
        } else {
            const fnList = this.events[type]
            const onceFnList = this.onceEvents[type]

            if(fnList) {
                this.events[type] = fnList.filter( item => item !== fn)
            }
            if(onceFnList) {
                this.onceEvents[type] = onceFnList.filter( item => item !== fn)
            }
        }
    }
    emit(type:string, ...args:any[]) {
        const fnList = this.events[type]
        const onceFnList = this.onceEvents[type]
        if(fnList) {
            fnList.forEach(f => f(...args))
        }
        if(onceFnList) {
            onceFnList.forEach(f => f(...args))

            this.onceEvents[type] = []
        }
    }
}

const e2 = new EventBus2()
function fn9(a: any, b:any) { console.log('fn1', a, b) }
function fn10(a: any, b:any) { console.log('fn2', a, b) }
function fn11(a: any, b:any) { console.log('fn3', a, b) }

e2.on('key', fn9)
e2.on('key', fn10)
e2.once('key', fn11)
e2.on('xxxxx', fn11)

e2.emit('key', 10,20) // 触发fn1 fn2 fn3
e2.off('key', fn9)
e2.emit('key', 100,200) // 触发fn2

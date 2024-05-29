class LazyMan {
    private name: string
    private tasks: Function[] = [] // 任务列表

    constructor(name: string) {
        this.name = name
        setTimeout(() => {
            this.next()
        })
    }

    private next() {
        const task = this.tasks.shift() // 取出当前tasks的第一个任务
        if(task) task()
    }

    eat(food: string) {
        const task = () => {
            console.info(`${this.name} eat ${food}`)
            this.next() // 立刻执行下一个任务
        }
        this.tasks.push(task)
        return this // 链式调用
    }

    sleep(seconds: number) {
        const task = () => {
            setTimeout(() => {
                this.next()
            }, seconds * 1000)
        }
        this.tasks.push(task)
        return this // 链式调用
    }
}

const me = new LazyMan('小七')
me.eat('苹果').eat('香蕉').sleep(5).eat('葡萄').eat('西瓜').sleep(3).eat('哈哈')

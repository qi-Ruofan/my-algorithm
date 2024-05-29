// @ts-ignore
Function.prototype.customCall = function(context: any, ...args: any[]) {
    if(context == null) context = globalThis
    if(typeof context !== 'object') context = new Object(context)

    const fnKey = Symbol() // 不会出现属性名覆盖
    context[fnKey] = this // this就是当前函数

    const res = context[fnKey](...args) //绑定了this

    delete context[fnKey] //清理fn,防止污染

    return res
}

// @ts-ignore
Function.prototype.customApply = function(context: any, args: any[] = []) {
    if(context == null) context = globalThis
    if(typeof context !== 'object') context = new Object(context)

    const fnKey = Symbol() // 不会出现属性名覆盖
    context[fnKey] = this // this就是当前函数

    const res = context[fnKey](...args) //绑定了this

    delete context[fnKey] //清理fn,防止污染

    return res
}

function fn2(this: any, a:any, b:any, c:any) {
    console.info(this, a, b, c)
}

// @ts-ignore
fn2.customApply({x: 100}, [10, 20, 30])


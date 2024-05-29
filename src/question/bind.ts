// @ts-ignore
Function.prototype.customBind = function(context: any, ...bindArgs: any[]) {
    // context是bind传入的this
    const self = this

    return function(...args: any[]) {
        // 拼接参数
        const newArgs = bindArgs.concat(args)
        return self.apply(context, newArgs)
    }
}

function fn(this: any, a:any, b:any, c:any) {
    console.info(this, a, b, c)
}

// @ts-ignore
const fn1 = fn.customBind({x: 100}, 10)
fn1(30, 40)

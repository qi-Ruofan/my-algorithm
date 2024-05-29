export function curry(fn: Function) {
    const fnArgsLength = fn.length // 传入函数的参数长度
    let args: any[] = []

    function calc(...newArgs: any[]) {
        args = [
            ...args,
            ...newArgs
        ]
        if(args.length < fnArgsLength) {
            // 参数不够 返回函数
            return calc
        } else {
            // 参数够了 返回执行结果
            return fn.apply(this, args.slice(0, fnArgsLength))
        }
    }
    return calc
}
function add(a: number, b: number, c: number) {
  return a+b+c
}
const curryAdd = curry(add)

console.info(curryAdd(10)(20)(30))

/**
 * @description instanceof
 * @param instance  instance
 * @origin class or function
 */

export function myInstanceof(instance: any, origin:any): boolean {
    if(instance == null) return false
    const type = typeof instance
    if(type !== 'object' && type !== 'function') {
        // 值类型
        return false
    }
    let tempInstance = instance // 防止修改instance
    while(tempInstance) {
        if(tempInstance.__proto__ === origin.prototype) {
            return true // 匹配上
        }
        // 未匹配
        tempInstance = tempInstance.__proto__
    }
    return false
}


// 功能测试
console.log(myInstanceof({}, Object))
console.log(myInstanceof([], Object))
console.log(myInstanceof('', Object))
console.log(myInstanceof([], Array))
console.log(myInstanceof({}, Array))
console.log(myInstanceof('', String))

/**
 * @description 深拷贝
 * @param obj obj
 * @param map weakMap 避免循环引用
 */

export function deepClone(obj:any, map = new WeakMap()): any {
    if(typeof obj !== 'object' || obj == null) return obj

    const objFromMap = map.get(obj)
    if(objFromMap) return objFromMap

    let target:any = {}
    map.set(obj, target)

    // Map
    if(obj instanceof Map) {
        target = new Map()
        obj.forEach((v, k) => {
            const v1 = deepClone(v, map)
            const k1 = deepClone(k, map)
            target.set(k1, v1)
        })
    }

    // Set
    if(obj instanceof Set) {
        target = new Set()
        obj.forEach(v => {
            const v1 = deepClone(v, map)
            target.add(v1)
        })
    }

     // Array
     if(obj instanceof Array) {
        target = obj.map(item => deepClone(item, map))
     }

     // object
     for(const key in obj) {
        const val = obj[key]
        const val1 = deepClone(val, map)
        target[key] = val1
     }

    return target
}


// 功能测试
const a:any = {
    set: new Set([10,20,30]),
    map: new Map([['x', 10], ['y', 20]]),
    obj: {
        name: '11'
    }
}
a.self = a
let b = deepClone(a)
b.obj.name = '22'
// console.log(deepClone(a))
console.log(b)
console.log(a)

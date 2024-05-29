/**
 * @description LRU cache
 */
class LRUCache {
    private length: number
    private data: Map<any, any> = new Map()

    constructor(length) {
        if(length<1) throw new Error('invalid length')
        this.length = length
    }

    set(key:any, val:any) {
        const data = this.data

        if(data.has(key)) {
            data.delete(key)
        }
        data.set(key, val)

        if(data.size > this.length) {
            const delKey = data.keys().next().value
            data.delete(delKey)
        }
    }

    get(key:any):any {
        const data = this.data
        if(!data.has(key)) return null

        const value = data.get(key)
        data.delete(key)
        data.set(key, value)

        return value
    }
}
const lruCache = new LRUCache(2) // 参数：长度
lruCache.set(1,1) // {1=1}
lruCache.set(2,2) // {1=1, 2==2}
console.info(lruCache.get(1)) // {2==2,1=1}
lruCache.set(3,3) // {2==2,3=3}
console.info(lruCache.get(2))  // null
lruCache.set(4,4) // {3=3,4=4}
console.info(lruCache.get(1))  // null
console.info(lruCache.get(3)) // {4=4,3=3}
console.info(lruCache.get(4))  // {3=3,4=4}

/**
 * @description LRU cache2
 */

interface IListNode {
    value: any
    key: string 
    prev?: IListNode
    next?: IListNode
}

export default class LRUCache {
    private length: number
    private data: {[key:string]: IListNode} = {}
    private dataLength: number = 0
    private listHead: IListNode | null = null
    private listTail: IListNode | null = null

    constructor(length: number) {
        if(length<1) throw new Error('invalid length')
        this.length = length
    }   

    private moveTotali(curNode: IListNode) {
        const tail = this.listTail
        if(tail === curNode) return

        // 1. 让prevNode nextNode 于 curNode 断绝关系
        const nextNode = curNode.next
        const prevNode = curNode.prev
        if(prevNode) {
            if(nextNode) {
                prevNode.next = nextNode
            } else {
                delete prevNode.next
            }
        }
        if(nextNode) {
            if(prevNode) {
                nextNode.prev = prevNode
            } else {
                delete nextNode.prev
            }
        }

        if(this.listHead === curNode) this.listHead = nextNode
        // 2. 让 curNode 断绝与 prevNode nextNode 关系
        delete curNode.next
        delete curNode.prev
        // 3. 在list 末尾重新建立listNode的新关系
        if(tail) {
            tail.next = curNode
            curNode.prev = tail
        }
        this.listTail = curNode
    }

    private tryClean() {
        while(this.dataLength > this.length) {
            const head = this.listHead
            if(head == null) throw new Error('invalid length')
            const headNext = head.next
            if(headNext == null) throw new Error('invalid length')

            delete headNext.next
            delete headNext.prev

            this.listHead = headNext

            delete this.data[head.key]

            this.dataLength = this.dataLength-1
        }
    }

    get(key: string):any {
        const data = this.data
        const curNode = data[key]

        if(this.listTail === curNode) {
            return curNode.value
        }

        this.moveTotali(curNode)

        return curNode.value
    }

    set(key: string, value: any) {
        const data = this.data
        const curNode = data[key]

        if(curNode == null) {
            // 新增
            const newNode: IListNode = {key, value}

            this.moveTotali(newNode)

            data[key] = newNode
            this.dataLength++

            if(this.dataLength === 1) this.listHead = newNode
        } else {
            // 修改
            curNode.value = value
            this.moveTotali(curNode)
        }

        // 清理长度
        this.tryClean()
    }
}

const lruCache = new LRUCache(2) // 参数：长度
lruCache.set('1',1) // {1=1}
lruCache.set('2',2) // {1=1, 2==2}
// console.info(lruCache.get('1')) // {2==2,1=1}
lruCache.set('3',3) // {2==2,3=3}
console.info(lruCache.get('2'))  // null
lruCache.set('4',4) // {3=3,4=4}
// console.info(lruCache.get('1'))  // null
// console.info(lruCache.get('3')) // {4=4,3=3}
// console.info(lruCache.get('4'))  // {3=3,4=4}

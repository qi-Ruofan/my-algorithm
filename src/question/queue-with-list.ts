/**
 * @description 链表实现队列
 * @author qrf
 */

// import { MyQueue } from "./two-stacks-one-queue"

interface IListNode {
  value: number,
  next: IListNode | null
}

export class MyQueue2 {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0

  /**
   * 入队，在tail位置
   * @param num number
   */
  add(num: number) {
    const newNode: IListNode = {
      value: num,
      next: null
    }
    // 处理head
    if(this.head === null) {
      this.head = newNode
    }

    // 处理tail
    const tailNode = this.tail
    if(tailNode) {
      tailNode.next = newNode
    }
    this.tail = newNode

    this.len++
  }
  delete(): number | null {
    const headNode = this.head
    if(headNode == null) return null
    if(this.len <= 0) return null
    // 取值
    const value = headNode.value
    // 处理head
    this.head = headNode.next

    this.len--

    return value
  }

  get length(): number {
    // length 要单独存储，即时获取，不能单独获取（否则时间复杂度太高）
    return this.len
  }
 }


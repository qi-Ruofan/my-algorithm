/**
 * @description 反转单向链表
 * @auter qrf
 */

export interface ILinkListNode {
  value: number,
  next?: ILinkListNode
}

export function reverseLinkList(listNode: ILinkListNode):ILinkListNode {
  // 定义三个指针
  let preNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode

  // 以nextNode为主，遍历循环引用
  while(nextNode) {
    // 第一个元素，删掉delete 防止循环引用
    if(curNode && !preNode) {
      delete curNode.next
    }

    // 反转指针
    if(curNode && preNode) {
      curNode.next = preNode
    }

    // 整体后移
    preNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next


  }

  curNode!.next = preNode

  return curNode
}

export function createLinkList(arr: number[]): ILinkListNode {
  const length = arr.length
  if(!length) throw Error('arr is empty')

  let curNode: ILinkListNode = {
    value: arr[length - 1]
  }
  if(length === 1) return curNode

  for(let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

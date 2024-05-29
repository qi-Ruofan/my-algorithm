import { MyQueue2 } from './queue-with-list'

describe('链表实现队列', () => {
  it('add and length', () => {
    const q = new MyQueue2()
    expect(q.length).toBe(0)

    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })
  it('delete', () => {
    const q = new MyQueue2()
    expect(q.delete()).toBeNull()

    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete()).toBe(100)
    expect(q.delete()).toBe(200)
    expect(q.delete()).toBe(300)
    expect(q.delete()).toBeNull()
  })
})

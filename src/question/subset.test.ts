import { isSubset } from './subset'

describe('判断b是a的子集', () => {
  it('无重复', () => {
    const a = [1,2,3,4,56,100,4]
    const b = [56, 2, 3]
    const res = isSubset(a, b)
    expect(res).toBe(true)
  })
  it('有重复', () => {
    const a = [1,2,3,3,4,56,100,4,100]
    const b = [56, 2, 3, 100, 100, 3]
    const res = isSubset(a, b)
    expect(res).toBe(true)
  })
  it('空数组', () => {
    const a = [1,2,3,3,4,56,100,4,100]
    const b = []
    const res = isSubset(a, b)
    expect(res).toBe(true)
  })
})

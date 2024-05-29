import { rotate1 } from './array-rotate'

export {rotate1, rotate2} from './array-rotate'

describe('数组旋转', () => {
  it('正常情况', () => {
    const arr = [3,4,5,6,7,8]
    const k = 3
    const res = rotate1(arr, k)
    expect(res).toEqual([6,7,8,3,4,5]) // 断言 判断对象或数组
  })

  it('数组为空', () => {
    const arr = []
    const k = 3
    const res = rotate1(arr, k)
    expect(res).toEqual([]) // 断言
  })

  it('k是负值', () => {
    const arr = [3,4,5,6,7,8]
    const k = -3
    const res = rotate1(arr, k)
    expect(res).toEqual([6,7,8,3,4,5]) // 断言
  })

  it('k 是0', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7]
      const k = 0;
      const res = rotate1(arr, k);
      expect(res).toEqual(arr);
  })

  it('k 不是数字', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7]
      const k = 'abc';

      // @ts-ignore
      const res = rotate1(arr, k);
      expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]);
  })
})

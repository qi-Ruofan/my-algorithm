/**
 * @description 数组旋转k步
 * @author 聪聪
 */


// 思路1: pop取出最后一位，unshift插入最前面，输出原数组
// 时间复杂度O(n)
export function rotate1(arr: number[],k: number):number[] {
  const length = arr.length
  if(!k || length === 0) return arr
  const step = Math.abs(k)%length

  for(let i = 0; i < step; i++) {
    const item = arr.pop()
    arr.unshift(item)
  }
  return arr
}

// 思路2：使用concat拼接，输出一个新数组
// 时间复杂度O(1)
export function rotate2(arr:number[], k:number):number[] {
  const length = arr.length
  if(!k || length === 0) return arr
  const step = k%length

  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  const res = part1.concat(part2)

  return res
}



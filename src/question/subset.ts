// 判断b是否是a的子集（a和b有重复元素，要求b的同个元素出现次数<=a的同个元素出现次数）
export function isSubset(a: number[], b: number[]) {
  const length = b.length
  if(!length) return true
  for(let i = 0; i < b.length; i++) {
    const idx = a.indexOf(b[i])
    if(idx !== -1) {
      a.splice(idx, 1)
    } else {
      return false
    }
  }
  return true
}



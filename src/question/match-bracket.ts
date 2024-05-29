/**
 * @description 括号匹配  
 * @author qrf
 */


// 思路：遇到左括号匹配入栈；右括号匹配出栈；判断最终length是否为0
// 时间复杂度O(n) 空间复杂度O(n)

function isMatch(left, right) {
  if(left === '(' && right === ')') return true
  if(left === '{' && right === '}') return true
  if(left === '[' && right === ']') return true
  return false
}
export function matchBracket(str: string) {
  const length = str.length
  if(!length) return true

  let stack = []
  const left = "([{"
  const right = ")]}"
  for(let i = 0; i < length; i++) {
    const s = str[i]
    if(left.includes(s)) {
      stack.push(s)
    } else if (right.includes(s)) {
      const top = stack[stack.length-1]
      if(isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    } 
  }
  return stack.length === 0
}

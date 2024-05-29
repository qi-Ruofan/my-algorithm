import { matchBracket } from './match-bracket'

describe('括号匹配', () => {
  it('正常情况', () => {
    const str = '{a(b[c]d)e}f'
    const res = matchBracket(str)
    expect(res).toBe(true) // 字符串、布尔、值类型toBe
  })

  it('不匹配', () => {
    const str = '{a(b[c])d)e}f'
    const res = matchBracket(str)
    expect(res).toBe(false) // 字符串、布尔、值类型toBe
  })

  it('顺序不一致', () => {
    const str = '{a(b[c]d}e)f'
    const res = matchBracket(str)
    expect(res).toBe(false) // 字符串、布尔、值类型toBe
  })

  it('空字符串', () => {
    const str = ''
    const res = matchBracket(str)
    expect(res).toBe(true) // 字符串、布尔、值类型toBe
  })
})

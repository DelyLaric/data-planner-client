/*
 * @desc   在字符串数组中匹配目标字符串
 *
 * @param  strings 字符串数组
 * @param  string  目标字符串
 *
 * @return 返回匹配成功的目标字符串，-1 表示匹配失败
 *
 * 为了增加字符串的匹配能力
 * 允许使用 IGNOREDLIST 忽略某些字符
 * 避免各种标点符号、空格、换行引起的匹配失败
 *
 * @bug 这里的匹配将忽视顺序和重复
 *
 */

const IGNOREDLIST = [
  '', ' ', '\r', '\n',
  '(', ')', '（', '）',
  '"', '“', '\'', '‘',
  '／', '/', '-', '－'
]

export function matchStringInArray (strings, target) {
  let string = stringFilter(target, IGNOREDLIST)

  for (let i = 0, L = strings.length; i < L; i++) {
    let item = strings[i]
    if (typeof item !== 'string') continue

    item = stringFilter(item, IGNOREDLIST)
    if (item === string) return i
  }

  return -1
}

/*
 * @desc  将字符串中的指定字符过滤
 *
 * @param string 需要过滤的字符串
 * @param list   过滤的字符列表
 *
 * @return 返回过滤后的字符串
 */

export function stringFilter (string, list) {
  let result = ''

  for (let i = 0, L = string.length; i < L; i++) {
    if (list.indexOf(string[i]) === -1) {
      result += string[i]
    }
  }

  return result
}

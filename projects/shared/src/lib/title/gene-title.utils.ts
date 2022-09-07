const titlePrefix = 'hanhan.rich'
const joinChar = '-'
export function geneTitleUtils(args?: string | string[]) {
  if (!args) {
    return titlePrefix
  }
  const list = Array.isArray(args) ? args : [args]
  const validList = list.filter(s => !!s)
  validList.unshift(titlePrefix)
  return validList.join(joinChar)
}

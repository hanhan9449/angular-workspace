import {Nullable} from "./title.directive";

const titlePrefix = 'hanhan.rich'
const joinChar = '-'
export function geneTitleUtils(args?: Nullable<string> | Nullable<string>[]) {
  if (!args) {
    return titlePrefix
  }
  const list = Array.isArray(args) ? args : [args]
  const validList = list.filter(s => !!s) as string[]
  validList.unshift(titlePrefix)
  return validList.join(joinChar)
}

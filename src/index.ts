export function arrayEquals(a:any[], b:any[]) {
  const equal = Array.isArray(a)
  && Array.isArray(b)
  && a.length === b.length
  && a.every((val, index) => val === b[index])

  return equal
}
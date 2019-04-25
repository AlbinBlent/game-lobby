export const splitArrayIntoChunks = (array, chunkSize) => {
  if (!chunkSize || chunkSize === '0') {
    return [array]
  }
  const thisChunk = array.slice(0, chunkSize)
  const remainder = array.slice(chunkSize)
  if (!remainder || remainder.length === 0) {
    return [thisChunk]
  }
  return [thisChunk, ...splitArrayIntoChunks(remainder, chunkSize)]
}

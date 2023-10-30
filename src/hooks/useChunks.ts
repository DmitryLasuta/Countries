import { useState, useEffect } from 'react'

export const useChunks = <T>(dataSet: T[], chunkSize: number = 10) => {
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0)

  const chunks = dataSet.reduce((acc: Array<T[]>, country, index) => {
    if (index % chunkSize === 0) {
      acc.push([])
    }
    acc[acc.length - 1].push(country)

    return acc
  }, [])

  const chunkToRender = chunks.slice(0, currentChunkIndex + 1).flat()
  const goToNextChunk = () => setCurrentChunkIndex(prev => prev + 1)
  const resetChunks = () => setCurrentChunkIndex(0)

  useEffect(() => {
    if (chunkToRender.length <= chunkSize) setCurrentChunkIndex(0)
  }, [chunkSize, chunkToRender.length])

  return {
    chunkToRender,
    currentChunkIndex,
    goToNextChunk,
    resetChunks,
  }
}

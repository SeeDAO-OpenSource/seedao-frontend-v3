import { useCallback, useEffect, useRef, useState } from 'react'
import { fromEvent } from 'rxjs'

export function useScrollButtons(options?: { step?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)
  const [isLeftmost, setIsLeftmost] = useState(true)
  const [isRightmost, setIsRightmost] = useState(false)

  const step = options?.step || ref.current?.clientWidth || 200

  const onScrollToRightByStep = useCallback(() => {
    if (!ref.current) return
    ref.current.scrollLeft = scrollX + step
  }, [step, scrollX])

  const onScrollToLeftByStep = useCallback(() => {
    if (!ref.current) return
    ref.current.scrollLeft = scrollX - step
  }, [step, scrollX])

  useEffect(() => {
    if (!ref.current) return () => {}
    const refScrollSubscriber = fromEvent(ref.current, 'scroll').subscribe(
      (e) => {
        const target = e.target as HTMLDivElement
        setIsRightmost(
          target.scrollLeft >= target.scrollWidth - target.clientWidth
        )
        setIsLeftmost(target.scrollLeft === 0)
        setScrollX(target.scrollLeft)
      }
    )
    return () => {
      refScrollSubscriber.unsubscribe()
    }
  }, [])

  return {
    ref,
    scrollX,
    isLeftmost,
    isRightmost,
    onScrollToRightByStep,
    onScrollToLeftByStep,
  }
}

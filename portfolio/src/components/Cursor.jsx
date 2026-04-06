import { useEffect, useRef } from 'react'
import '../styles/Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let frame
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx.current + 'px'
        cursorRef.current.style.top = my.current + 'px'
      }
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top = ry.current + 'px'
      }
      frame = requestAnimationFrame(animate)
    }
    animate()

    const addHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRef.current?.style.setProperty('transform', 'translate(-50%,-50%) scale(2.5)')
          if (ringRef.current) ringRef.current.style.opacity = '0'
        })
        el.addEventListener('mouseleave', () => {
          cursorRef.current?.style.setProperty('transform', 'translate(-50%,-50%) scale(1)')
          if (ringRef.current) ringRef.current.style.opacity = '0.5'
        })
      })
    }
    addHover()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
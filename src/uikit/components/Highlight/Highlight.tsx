import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Highlight.module.scss'

type HighlightProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Highlight({ children, className, ...props }: HighlightProps) {
  return (
    <span className={[styles.highlight, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}

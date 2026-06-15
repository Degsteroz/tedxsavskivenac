import type { ReactNode } from 'react'
import styles from './GhostLine.module.scss'

type GhostLineVariant = 'accent' | 'default'

type GhostLineProps = {
  children: ReactNode
  variant?: GhostLineVariant
  className?: string
}

export function GhostLine({
  children,
  variant = 'default',
  className,
}: GhostLineProps) {
  return (
    <span
      className={[styles.wrap, styles[variant], className].filter(Boolean).join(' ')}
    >
      <span className={styles.back} aria-hidden>
        {children}
      </span>
      <span className={styles.front}>{children}</span>
    </span>
  )
}

import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Section.module.scss'

type SectionVariant = 'default' | 'compact'

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  variant?: SectionVariant
}

export function Section({
  children,
  className,
  variant = 'default',
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        styles.section,
        variant === 'compact' ? styles.variantCompact : styles.variantDefault,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}

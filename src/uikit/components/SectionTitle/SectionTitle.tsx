import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({
  children,
  className,
  as: Tag = 'h2',
  ...props
}: SectionTitleProps) {
  const Component = Tag as ElementType

  return (
    <Component
      className={[styles.title, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}

import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Text.module.scss'

type TextVariant = 'default' | 'muted' | 'caption' | 'legal'

const variantClassMap: Record<TextVariant, string> = {
  default: 'variantDefault',
  muted: 'variantMuted',
  caption: 'variantCaption',
  legal: 'variantLegal',
}

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode
  variant?: TextVariant
  as?: 'p' | 'span' | 'div'
}

export function Text({
  children,
  className,
  variant = 'default',
  as: Tag = 'p',
  ...props
}: TextProps) {
  return (
    <Tag
      className={[
        styles.text,
        styles[variantClassMap[variant] as keyof typeof styles],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}

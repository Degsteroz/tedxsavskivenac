import type { AnchorHTMLAttributes } from 'react'
import styles from './NavLink.module.scss'

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: string
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a className={[styles.link, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </a>
  )
}

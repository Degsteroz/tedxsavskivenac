import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from '@/uikit'
import styles from './HeaderNav.module.scss'

export type NavItem = {
  label: string
  href: string
}

type HeaderNavProps = {
  items: NavItem[]
}

function isRouterLink(href: string) {
  return href.startsWith('/') && !href.includes('#')
}

export function HeaderNav({ items }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <button
        type="button"
        className={styles.burger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="main-nav-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
      </button>

      <ul
        id="main-nav-menu"
        className={[styles.menu, isOpen && styles.open].filter(Boolean).join(' ')}
      >
        {items.map((item) => (
          <li key={item.href}>
            {isRouterLink(item.href) ? (
              <Link to={item.href} className={styles.link} onClick={closeMenu}>
                {item.label}
              </Link>
            ) : (
              <NavLink href={item.href} onClick={closeMenu}>
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

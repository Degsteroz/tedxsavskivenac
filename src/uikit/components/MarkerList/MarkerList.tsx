import type { ReactNode } from 'react'
import styles from './MarkerList.module.scss'

type MarkerListProps = {
  children: ReactNode
}

export function MarkerList({ children }: MarkerListProps) {
  return <ul className={styles.list}>{children}</ul>
}

type MarkerListItemProps = {
  children: ReactNode
}

export function MarkerListItem({ children }: MarkerListItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.marker} aria-hidden />
      <span className={styles.label}>{children}</span>
    </li>
  )
}

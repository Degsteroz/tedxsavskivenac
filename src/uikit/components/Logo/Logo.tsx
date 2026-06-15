import { BRAND } from '@/constants/brand'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <a href="#" className={styles.logo} aria-label={`${BRAND.tedx} ${BRAND.location} — scroll to top`}>
      <span className={styles.tedx}>{BRAND.tedx}</span>
      <span className={styles.location}>{BRAND.location}</span>
    </a>
  )
}

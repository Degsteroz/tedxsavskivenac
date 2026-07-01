import { Link } from 'react-router-dom'
import { BRAND } from '@/constants/brand'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label={`${BRAND.tedx} ${BRAND.location} — home`}>
      <span className={styles.tedx}>{BRAND.tedx}</span>
      <span className={styles.location}>{BRAND.location}</span>
    </Link>
  )
}

import styles from './Logo.module.scss'

export function Logo() {
  return (
    <a href="#" className={styles.logo} aria-label="TEDxSavskiVenac — scroll to top">
      <span className={styles.tedx}>TEDx</span>
      <span className={styles.name}>SavskiVenac</span>
    </a>
  )
}

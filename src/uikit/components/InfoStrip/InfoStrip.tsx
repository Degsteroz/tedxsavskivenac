import { MapPin, Target } from 'lucide-react'
import styles from './InfoStrip.module.scss'

type InfoStripProps = {
  location: string
  theme: string
}

export function InfoStrip({ location, theme }: InfoStripProps) {
  return (
    <div className={styles.strip}>
      <div className={styles.item}>
        <MapPin className={styles.icon} size={24} strokeWidth={2.5} aria-hidden />
        <span className={styles.text}>{location}</span>
      </div>
      <div className={styles.item}>
        <Target className={styles.icon} size={24} strokeWidth={2.5} aria-hidden />
        <span className={styles.text}>{theme}</span>
      </div>
    </div>
  )
}

import styles from './StatCard.module.scss'

type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.value}>{value}</span>
      <p className={styles.label}>{label}</p>
    </article>
  )
}

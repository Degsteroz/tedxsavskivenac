import styles from './FeatureCard.module.scss'

type FeatureCardProps = {
  title: string
  description: string
  icon?: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

import styles from './TierCard.module.scss'

type TierCardProps = {
  badge: string
  name: string
  price: string
  availability: string
  features: readonly string[]
}

export function TierCard({ badge, name, price, availability, features }: TierCardProps) {
  return (
    <article className={styles.tier}>
      <span className={styles.badge} aria-hidden="true">{badge}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.availability}>{availability}</p>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  )
}

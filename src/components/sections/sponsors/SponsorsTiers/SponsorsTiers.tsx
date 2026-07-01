import { Container, Section, SectionTitle, TierCard } from '@/uikit'
import { SPONSORS_TIERS } from '@/constants/sponsorship'
import styles from './SponsorsTiers.module.scss'

export function SponsorsTiers() {
  return (
    <Section id="tiers" className={styles.tiers}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_TIERS.title}</SectionTitle>
        <div className={styles.grid}>
          {SPONSORS_TIERS.tiers.map((tier) => (
            <TierCard
              key={tier.name}
              badge={tier.badge}
              name={tier.name}
              price={tier.price}
              availability={tier.availability}
              features={tier.features}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

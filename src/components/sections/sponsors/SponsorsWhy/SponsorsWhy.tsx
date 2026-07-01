import { Container, FeatureCard, Section, SectionTitle } from '@/uikit'
import { SPONSORS_WHY } from '@/constants/sponsorship'
import styles from './SponsorsWhy.module.scss'

export function SponsorsWhy() {
  return (
    <Section id="why" className={styles.why}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_WHY.title}</SectionTitle>
        <div className={styles.grid}>
          {SPONSORS_WHY.items.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

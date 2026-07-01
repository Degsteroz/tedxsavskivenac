import { Container, FeatureCard, Section, SectionTitle, Text } from '@/uikit'
import { SPONSORS_IN_KIND } from '@/constants/sponsorship'
import styles from './SponsorsInKind.module.scss'

export function SponsorsInKind() {
  return (
    <Section id="inkind" className={styles.inkind}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_IN_KIND.title}</SectionTitle>
        <Text className={styles.intro}>{SPONSORS_IN_KIND.intro}</Text>
        <div className={styles.grid}>
          {SPONSORS_IN_KIND.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

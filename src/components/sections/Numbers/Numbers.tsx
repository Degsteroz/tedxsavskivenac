import { Container, Section, SectionTitle, StatCard } from '@/uikit'
import { NUMBERS_CONTENT } from '@/constants/content'
import styles from './Numbers.module.scss'

export function Numbers() {
  return (
    <Section id="numbers" className={styles.numbers}>
      <Container>
        <SectionTitle>{NUMBERS_CONTENT.title}</SectionTitle>
        <div className={styles.grid}>
          {NUMBERS_CONTENT.stats.map((stat) => (
            <StatCard key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

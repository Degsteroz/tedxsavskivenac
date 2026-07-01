import { Container, Section, SectionTitle, Text } from '@/uikit'
import { SPONSORS_BUDGET } from '@/constants/sponsorship'
import styles from './SponsorsBudget.module.scss'

export function SponsorsBudget() {
  return (
    <Section className={styles.budget}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_BUDGET.title}</SectionTitle>
        <Text className={styles.intro}>{SPONSORS_BUDGET.intro}</Text>
        <div className={styles.table}>
          {SPONSORS_BUDGET.rows.map((row) => (
            <div key={row.label} className={styles.row}>
              <span className={styles.label}>{row.label}</span>
              <span className={styles.amount}>{row.amount}</span>
            </div>
          ))}
          <div className={[styles.row, styles.total].join(' ')}>
            <span>{SPONSORS_BUDGET.total.label}</span>
            <span className={styles.totalAmount}>{SPONSORS_BUDGET.total.amount}</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}

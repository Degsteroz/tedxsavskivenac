import { Container, Section, SectionTitle, Text } from '@/uikit'
import { SPONSORS_ABOUT } from '@/constants/sponsorship'
import styles from './SponsorsAbout.module.scss'

export function SponsorsAbout() {
  return (
    <Section id="about" className={styles.about}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_ABOUT.title}</SectionTitle>
        <Text className={styles.text}>{SPONSORS_ABOUT.text}</Text>
        <Text className={styles.note}>{SPONSORS_ABOUT.note}</Text>
      </Container>
    </Section>
  )
}

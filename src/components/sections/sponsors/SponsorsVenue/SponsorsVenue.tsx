import { Container, Section, SectionTitle, Text } from '@/uikit'
import { SPONSORS_VENUE } from '@/constants/sponsorship'
import { STARTIT_LINKEDIN_URL } from '@/constants/links'
import styles from './SponsorsVenue.module.scss'

export function SponsorsVenue() {
  return (
    <Section className={styles.venue}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_VENUE.title}</SectionTitle>
        <Text className={styles.text}>{SPONSORS_VENUE.text}</Text>
        <a
          href={STARTIT_LINKEDIN_URL}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SPONSORS_VENUE.linkedinLabel}
        </a>
      </Container>
    </Section>
  )
}

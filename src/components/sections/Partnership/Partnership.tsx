import { Button, Container, Section, SectionTitle, Text } from '@/uikit'
import { PARTNERSHIP_CONTENT } from '@/constants/content'
import { PARTNER_MAILTO } from '@/constants/links'
import styles from './Partnership.module.scss'

export function Partnership() {
  return (
    <Section id="partnership" className={styles.partnership}>
      <Container>
        <SectionTitle>{PARTNERSHIP_CONTENT.title}</SectionTitle>
        <Text className={styles.text}>{PARTNERSHIP_CONTENT.text}</Text>
        <Button as="a" href={PARTNER_MAILTO} variant="primary" size="md">
          {PARTNERSHIP_CONTENT.cta}
        </Button>
      </Container>
    </Section>
  )
}

import { Button, Container, Highlight, Section, Text } from '@/uikit'
import { SPONSORS_CTA } from '@/constants/sponsorship'
import { PARTNER_MAILTO } from '@/constants/links'
import styles from './SponsorsCta.module.scss'

export function SponsorsCta() {
  return (
    <Section id="contact" className={styles.cta}>
      <Container>
        <h2 className={styles.title}>
          <Highlight>{SPONSORS_CTA.title}</Highlight>
        </h2>
        <Text className={styles.text}>{SPONSORS_CTA.text}</Text>
        <Button as="a" href={PARTNER_MAILTO} variant="primary" size="md">
          {SPONSORS_CTA.cta}
        </Button>
      </Container>
    </Section>
  )
}

import { Container, Section, SocialLinks, Text } from '@/uikit'
import { FOOTER_CONTENT } from '@/constants/content'
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '@/constants/links'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <Section id="contacts" variant="compact" className={styles.footer}>
      <Container>
        <SocialLinks
          instagramUrl={INSTAGRAM_URL}
          instagramHandle={INSTAGRAM_HANDLE}
          email={CONTACT_EMAIL}
        />
        <Text variant="legal">{FOOTER_CONTENT.disclaimer}</Text>
      </Container>
    </Section>
  )
}

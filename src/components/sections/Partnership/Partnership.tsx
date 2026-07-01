import { Link } from 'react-router-dom'
import { Container, Section, SectionTitle, Text } from '@/uikit'
import buttonStyles from '@/uikit/components/Button/Button.module.scss'
import { PARTNERSHIP_CONTENT } from '@/constants/content'
import { SPONSORS_PATH } from '@/constants/links'
import styles from './Partnership.module.scss'

export function Partnership() {
  return (
    <Section id="partnership" className={styles.partnership}>
      <Container>
        <span className={styles.eyebrow}>{PARTNERSHIP_CONTENT.eyebrow}</span>
        <SectionTitle>{PARTNERSHIP_CONTENT.title}</SectionTitle>
        <Text className={styles.text}>{PARTNERSHIP_CONTENT.text}</Text>
        <Link
          to={SPONSORS_PATH}
          className={[buttonStyles.button, buttonStyles.primary, buttonStyles.md].join(' ')}
        >
          {PARTNERSHIP_CONTENT.cta}
        </Link>
      </Container>
    </Section>
  )
}

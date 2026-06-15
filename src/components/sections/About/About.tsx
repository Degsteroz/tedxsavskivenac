import { Container, Section, SectionTitle, Text } from '@/uikit'
import { ABOUT_CONTENT } from '@/constants/content'
import styles from './About.module.scss'

export function About() {
  return (
    <Section id="about" className={styles.about}>
      <Container>
        <SectionTitle className={`${styles.title} ${styles.red}`}>{ABOUT_CONTENT.title}</SectionTitle>
        <SectionTitle className={styles.title}>{ABOUT_CONTENT.subtitle}</SectionTitle>
        <Text className={styles.text}>{ABOUT_CONTENT.text}</Text>
      </Container>
    </Section>
  )
}

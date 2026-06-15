import { Container, Section, SectionTitle, Text } from '@/uikit'
import { ABOUT_CONTENT } from '@/constants/content'
import styles from './About.module.scss'

export function About() {
  return (
    <Section id="about" className={styles.about}>
      <Container>
        <SectionTitle>{ABOUT_CONTENT.title}</SectionTitle>
        <Text className={styles.text}>{ABOUT_CONTENT.text}</Text>
      </Container>
    </Section>
  )
}

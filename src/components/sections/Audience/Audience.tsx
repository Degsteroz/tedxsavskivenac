import { Container, MarkerList, MarkerListItem, Section, SectionTitle, Text } from '@/uikit'
import { AUDIENCE_CONTENT } from '@/constants/content'
import styles from './Audience.module.scss'

export function Audience() {
  return (
    <Section id="audience" className={styles.audience}>
      <Container>
        <SectionTitle className={styles.title}>{AUDIENCE_CONTENT.title}</SectionTitle>
        <MarkerList>
          {AUDIENCE_CONTENT.items.map((item) => (
            <MarkerListItem key={item.label}>
              {item.label}
            </MarkerListItem>
          ))}
        </MarkerList>
        <Text variant="muted">{AUDIENCE_CONTENT.caption}</Text>
      </Container>
    </Section>
  )
}

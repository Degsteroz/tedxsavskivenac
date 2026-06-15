import { Button, Container, Highlight, InfoStrip, Section } from '@/uikit'
import { HERO_CONTENT } from '@/constants/content'
import { TICKETS_URL } from '@/constants/links'
import styles from './Hero.module.scss'

export function Hero() {
  return (
    <Section className={styles.hero}>
      <Container>
        <div className={styles.headlineWrap}>
          <h1 className={styles.headlineBack} aria-hidden>
            {HERO_CONTENT.headline}
          </h1>
          <h1 className={styles.headlineFront}>{HERO_CONTENT.headline}</h1>
        </div>

        <p className={styles.manifest}>
          {HERO_CONTENT.manifest.before}
          <Highlight>{HERO_CONTENT.manifest.highlight1}</Highlight>
          {HERO_CONTENT.manifest.middle}
          <Highlight>{HERO_CONTENT.manifest.highlight2}</Highlight>
        </p>

        <InfoStrip location={HERO_CONTENT.location} theme={HERO_CONTENT.theme} />

        <Button
          as="a"
          href={TICKETS_URL}
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Tickets
        </Button>
      </Container>
    </Section>
  )
}

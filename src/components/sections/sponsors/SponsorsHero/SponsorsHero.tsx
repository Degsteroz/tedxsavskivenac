import { Link } from 'react-router-dom'
import { Container, GhostLine, Section } from '@/uikit'
import buttonStyles from '@/uikit/components/Button/Button.module.scss'
import { SPONSORS_HERO } from '@/constants/sponsorship'
import { PARTNER_MAILTO } from '@/constants/links'
import styles from './SponsorsHero.module.scss'

export function SponsorsHero() {
  return (
    <Section className={styles.hero}>
      <Container>
        <span className={styles.eyebrow}>{SPONSORS_HERO.eyebrow}</span>
        <div className={styles.headlineWrap}>
          <h1 className={styles.title}>
            <span className={styles.brand}>
              <GhostLine variant="accent">{SPONSORS_HERO.title.highlight}</GhostLine>
              <GhostLine variant="default">{SPONSORS_HERO.title.rest}</GhostLine>
            </span>
          </h1>
        </div>
        <p className={styles.subtitle}>{SPONSORS_HERO.subtitle}</p>
        <div className={styles.actions}>
          <a href="#tiers" className={[buttonStyles.button, buttonStyles.primary, buttonStyles.md].join(' ')}>
            {SPONSORS_HERO.ctaPrimary}
          </a>
          <a
            href={PARTNER_MAILTO}
            className={[buttonStyles.button, buttonStyles.ghost, buttonStyles.md].join(' ')}
          >
            {SPONSORS_HERO.ctaSecondary}
          </a>
          <Link to="/" className={styles.backLink}>
            ← Back to main site
          </Link>
        </div>
      </Container>
    </Section>
  )
}

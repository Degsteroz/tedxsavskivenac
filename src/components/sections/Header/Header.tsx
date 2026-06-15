import { Button, Container, HeaderNav, Logo } from '@/uikit'
import { TICKETS_URL } from '@/constants/links'
import { NAV_ITEMS } from '@/constants/navigation'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <div className={styles.actions}>
          <HeaderNav items={[...NAV_ITEMS]} />
          <Button
            as="a"
            href={TICKETS_URL}
            variant="ghost"
            size="sm"
            className={styles.tickets}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Tickets
          </Button>
        </div>
      </Container>
    </header>
  )
}

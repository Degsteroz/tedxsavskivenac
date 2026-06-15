import { AtSign, Mail } from 'lucide-react'
import styles from './SocialLinks.module.scss'

type SocialLinksProps = {
  instagramUrl: string
  instagramHandle: string
  email: string
}

export function SocialLinks({ instagramUrl, instagramHandle, email }: SocialLinksProps) {
  return (
    <div className={styles.links}>
      <a
        href={instagramUrl}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AtSign size={20} strokeWidth={2.5} aria-hidden />
        <span>{instagramHandle}</span>
      </a>
      <a href={`mailto:${email}`} className={styles.link}>
        <Mail size={20} strokeWidth={2.5} aria-hidden />
        <span>{email}</span>
      </a>
    </div>
  )
}

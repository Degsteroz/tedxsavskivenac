import { AtSign, Link2, Mail } from 'lucide-react'
import styles from './SocialLinks.module.scss'

type SocialLinksProps = {
  instagramUrl: string
  instagramHandle: string
  linkedInUrl: string
  linkedInHandle: string
  email: string
}

export function SocialLinks({
  instagramUrl,
  instagramHandle,
  linkedInUrl,
  linkedInHandle,
  email,
}: SocialLinksProps) {
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
      <a
        href={linkedInUrl}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Link2 size={20} strokeWidth={2.5} aria-hidden />
        <span>{linkedInHandle}</span>
      </a>
      <a href={`mailto:${email}`} className={styles.link}>
        <Mail size={20} strokeWidth={2.5} aria-hidden />
        <span>{email}</span>
      </a>
    </div>
  )
}

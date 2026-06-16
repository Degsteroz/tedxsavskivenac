export const CONTACT_LINKS = {
  linkedin: 'https://www.linkedin.com/in/',
  telegram: 'https://t.me/',
  instagram: 'https://www.instagram.com/',
} as const

export type ContactPlatform = keyof typeof CONTACT_LINKS

export const CONTACT_ORDER: readonly ContactPlatform[] = ['linkedin', 'telegram', 'instagram']

export function getContactUrl(platform: ContactPlatform, value: string) {
  return CONTACT_LINKS[platform] + value
}

export function getOrderedContacts(
  contacts: Partial<Record<ContactPlatform, string>> | null,
): Array<[ContactPlatform, string]> {
  if (!contacts) {
    return []
  }

  return CONTACT_ORDER.flatMap((platform) => {
    const value = contacts[platform]
    return value ? [[platform, value] as const] : []
  })
}

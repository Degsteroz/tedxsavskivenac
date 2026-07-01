import { HERO_CONTENT } from '@/constants/content'
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TICKETS_URL,
} from '@/constants/links'

export const SITE_URL = 'https://tedxsavskivenac.com'
export const SITE_NAME = 'TEDxSavskiVenac'
export const SITE_LOCALE = 'en_US'

export const SEO = {
  title: 'TEDxSavskiVenac 2026 | Small Shifts, Big Impact',
  description:
    'Join TEDxSavskiVenac on October 10, 2026 at Startit Center, Belgrade. An independent TEDx event where local energy sparks global ideas. Theme: Small Shifts, Big Impact.',
  keywords: [
    'TEDxSavskiVenac',
    'TEDx',
    'Belgrade',
    'Startit Center',
    'conference',
    'ideas',
    'Small Shifts Big Impact',
    'IT Connect Belgrade',
  ].join(', '),
  author: SITE_NAME,
  themeColor: '#000000',
  ogImage: `${SITE_URL}/og-image.svg`,
  eventDate: '2026-10-10',
  eventStartTime: '10:00',
  eventEndTime: '18:00',
  venueName: 'Startit Center',
  venueCity: 'Belgrade',
  venueCountry: 'RS',
  theme: 'Small Shifts, Big Impact',
} as const

export const EVENT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: SITE_NAME,
  description: SEO.description,
  startDate: `${SEO.eventDate}T${SEO.eventStartTime}:00+02:00`,
  endDate: `${SEO.eventDate}T${SEO.eventEndTime}:00+02:00`,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: [SEO.ogImage],
  url: SITE_URL,
  inLanguage: 'en',
  keywords: SEO.keywords,
  maximumAttendeeCapacity: 100,
  location: {
    '@type': 'Place',
    name: SEO.venueName,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO.venueCity,
      addressCountry: SEO.venueCountry,
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'IT Connect Belgrade',
    email: CONTACT_EMAIL,
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  },
  performer: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  offers: {
    '@type': 'Offer',
    url: TICKETS_URL,
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01',
  },
  about: HERO_CONTENT.theme,
} as const

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SEO.description,
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
    },
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  },
} as const

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  logo: `${SITE_URL}/favicon.svg`,
} as const

export const STRUCTURED_DATA = [EVENT_SCHEMA, WEBSITE_SCHEMA, ORGANIZATION_SCHEMA] as const

export const SPONSORS_SEO = {
  title: 'Partnership Proposal — TEDxSavskiVenac 2026',
  description:
    'Become a partner of TEDxSavskiVenac 2026. Sponsorship packages from €200, in-kind partnerships, and exclusive access to 100 decision-makers in Belgrade.',
  keywords: [
    'TEDxSavskiVenac sponsorship',
    'TEDx partner',
    'Belgrade event sponsorship',
    'TEDx sponsorship packages',
    'IT Connect Belgrade',
  ].join(', '),
  ogImage: SEO.ogImage,
} as const

export const SPONSORS_URL = `${SITE_URL}/sponsors`

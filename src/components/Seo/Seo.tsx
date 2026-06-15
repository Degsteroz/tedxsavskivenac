import { useEffect } from 'react'
import { SEO, SITE_URL, STRUCTURED_DATA } from '@/constants/seo'

const STRUCTURED_DATA_ID = 'tedx-structured-data'

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function Seo() {
  useEffect(() => {
    document.title = SEO.title
    document.documentElement.lang = 'en'

    upsertMeta('name', 'description', SEO.description)
    upsertMeta('name', 'keywords', SEO.keywords)
    upsertMeta('name', 'author', SEO.author)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'theme-color', SEO.themeColor)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SEO.author)
    upsertMeta('property', 'og:title', SEO.title)
    upsertMeta('property', 'og:description', SEO.description)
    upsertMeta('property', 'og:url', SITE_URL)
    upsertMeta('property', 'og:image', SEO.ogImage)
    upsertMeta('property', 'og:locale', 'en_US')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', SEO.title)
    upsertMeta('name', 'twitter:description', SEO.description)
    upsertMeta('name', 'twitter:image', SEO.ogImage)

    upsertLink('canonical', SITE_URL)

    let script = document.getElementById(STRUCTURED_DATA_ID)

    if (!script) {
      script = document.createElement('script')
      script.id = STRUCTURED_DATA_ID
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(STRUCTURED_DATA)
  }, [])

  return null
}

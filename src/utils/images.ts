const CLOUDINARY_VERSION = 'v1743973052/it-connect/'
const PARTNERS = 'v1743973052/it-connect-parthners/'

export function getImageUrl(id: string, width = 480, partnersLink?: boolean) {
  return `https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,q_auto:eco,w_${width}/${partnersLink ? PARTNERS : CLOUDINARY_VERSION}${id}`
}

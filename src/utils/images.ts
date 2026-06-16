const CLOUDINARY_VERSION = 'v1743973052/it-connect/'

export function getImageUrl(id: string, width = 480) {
  return `https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,q_auto:eco,w_${width}/${CLOUDINARY_VERSION}${id}`
}

const previewSecret = 'skmFaPWYUPjHZFAqDlza7T7vehiAuDSxNkqqkQ8cLGfaHZyf9k07hEAfkawg7ERzmYyLut0sfUYKPEeYjBM7GcaCsjhYfrj31LEbp6WKUKY8SeWNTUuhtCuqRAisVbm6QxQhPbLC6ERJKsaGDzlyFKGDpxolgoDCzLhE8byLGat5bYIa3yH4' // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = 'https://cms-sanity-app.vercel.app/'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
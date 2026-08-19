export const OVERVIEW_ID = 'descripcion-general'

export function sectionAnchor(title: string, explicitId?: string): string {
  if (explicitId) return explicitId
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

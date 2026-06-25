export function appUrl(): string {
  const raw = import.meta.env.VITE_APP_URL as string | undefined
  const trimmed = raw?.trim() ?? ''
  return trimmed.length > 0 ? trimmed.replace(/\/$/, '') : '#'
}

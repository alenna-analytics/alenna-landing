export function appUrl(): string {
  const raw = import.meta.env.VITE_APP_URL as string | undefined
  const trimmed = raw?.trim() ?? ''
  return trimmed.length > 0 ? trimmed.replace(/\/$/, '') : '#'
}

function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed.length > 0 ? trimmed : '/'
}

export function sitePath(path: string): string {
  const hashIndex = path.indexOf('#')
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : ''
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) || '/' : path
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  const fullPath = base.length === 0 ? normalized : `${base}${normalized}`
  return `${fullPath}${hash}`
}

export function publicAsset(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}

export function currentAppPath(): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  let path = normalizePath(window.location.pathname)

  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || '/'
  }

  return path
}

import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

type LangToggleProps = {
  variant?: 'light' | 'dark'
}

export function LangToggle({ variant = 'light' }: LangToggleProps) {
  const { lang, setLang } = useLanguage()
  const rootClass = ['lang-toggle', variant === 'dark' ? 'lang-toggle--dark' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClass} role="group" aria-label="Idioma">
      <button
        type="button"
        className={['lang-toggle__btn', lang === 'es' ? 'is-active' : ''].filter(Boolean).join(' ')}
        onClick={() => setLang('es')}
      >
        {landingT(lang, 'langEs')}
      </button>
      <button
        type="button"
        className={['lang-toggle__btn', lang === 'en' ? 'is-active' : ''].filter(Boolean).join(' ')}
        onClick={() => setLang('en')}
      >
        {landingT(lang, 'langEn')}
      </button>
    </div>
  )
}

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { ENTERPRISE_PATH, enterpriseContent } from '@/lib/i18n/enterprise-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect, useState, type FormEvent } from 'react'

type FormFields = {
  company_name: string
  email: string
  user_count: string
  product_count: string
  monthly_orders: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_FORM: FormFields = {
  company_name: '',
  email: '',
  user_count: '',
  product_count: '',
  monthly_orders: '',
  message: '',
}

function planInquiryEndpoint(): string {
  const raw = import.meta.env.VITE_API_URL as string | undefined
  const base = (raw?.trim() ?? '').replace(/\/$/, '')
  return base ? `${base}/public/plan-inquiries` : ''
}

export function EnterprisePage() {
  const { lang } = useLanguage()
  const content = enterpriseContent(lang)
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')

  useEffect(() => {
    document.title = content.metaTitle
  }, [content.metaTitle])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const endpoint = planInquiryEndpoint()
    if (!endpoint) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    const payload = {
      company_name: fields.company_name.trim(),
      email: fields.email.trim(),
      user_count: Number.parseInt(fields.user_count, 10),
      product_count: Number.parseInt(fields.product_count, 10),
      monthly_orders: Number.parseInt(fields.monthly_orders, 10),
      message: fields.message.trim() || null,
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.status === 201) {
        setStatus('success')
        setFields(EMPTY_FORM)
        return
      }

      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  return (
    <>
      <SiteHeader />
      <main className="enterprise-page">
        <div className="container enterprise-page__inner">
          <a href={sitePath('/')} className="enterprise-page__back">
            ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </a>

          <div className="enterprise-page__layout">
            <div className="enterprise-page__copy">
              <p className="enterprise-page__brand">{content.brandLabel}</p>
              <h1 className="enterprise-page__title">{content.title}</h1>
              <p className="enterprise-page__intro">{content.intro}</p>
            </div>

            <div className="enterprise-page__form-panel">
              {status === 'success' ? (
                <div className="enterprise-page__success" role="status">
                  <h2 className="enterprise-page__success-title">{content.successTitle}</h2>
                  <p className="enterprise-page__success-message">{content.successMessage}</p>
                </div>
              ) : (
                <form className="enterprise-form" onSubmit={handleSubmit}>
                  <label className="enterprise-form__field">
                    <span>{content.companyLabel}</span>
                    <input
                      type="text"
                      name="company_name"
                      required
                      maxLength={200}
                      value={fields.company_name}
                      onChange={(event) => updateField('company_name', event.target.value)}
                    />
                  </label>

                  <label className="enterprise-form__field">
                    <span>{content.emailLabel}</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={fields.email}
                      onChange={(event) => updateField('email', event.target.value)}
                    />
                  </label>

                  <div className="enterprise-form__row">
                    <label className="enterprise-form__field">
                      <span>{content.userCountLabel}</span>
                      <input
                        type="number"
                        name="user_count"
                        required
                        min={1}
                        value={fields.user_count}
                        onChange={(event) => updateField('user_count', event.target.value)}
                      />
                    </label>

                    <label className="enterprise-form__field">
                      <span>{content.productCountLabel}</span>
                      <input
                        type="number"
                        name="product_count"
                        required
                        min={1}
                        value={fields.product_count}
                        onChange={(event) => updateField('product_count', event.target.value)}
                      />
                    </label>
                  </div>

                  <label className="enterprise-form__field">
                    <span>{content.monthlyOrdersLabel}</span>
                    <input
                      type="number"
                      name="monthly_orders"
                      required
                      min={1}
                      value={fields.monthly_orders}
                      onChange={(event) => updateField('monthly_orders', event.target.value)}
                    />
                  </label>

                  <label className="enterprise-form__field">
                    <span>{content.messageLabel}</span>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={2000}
                      placeholder={content.messagePlaceholder}
                      value={fields.message}
                      onChange={(event) => updateField('message', event.target.value)}
                    />
                  </label>

                  {status === 'error' ? (
                    <p className="enterprise-form__error" role="alert">
                      {!planInquiryEndpoint() ? content.errorConfig : content.errorGeneric}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="btn btn--primary enterprise-form__submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? content.submitting : content.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export { ENTERPRISE_PATH }

import { LegalListItem, LegalText } from '@/components/LegalText'
import type { LegalBlock } from '@/lib/i18n/legal-types'
import { sectionAnchor } from '@/lib/section-anchor'

export type RenderedLegalSection = {
  id?: string
  title: string
  blocks: LegalBlock[]
}

export function LegalSections({ sections }: { sections: RenderedLegalSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.title}
          className="legal-page__section"
          id={sectionAnchor(section.title, section.id)}
        >
          <h2 className="legal-page__heading">{section.title}</h2>
          {section.blocks.map((block, index) => {
            const key = `${section.title}-${index}`

            if (block.kind === 'h3') {
              return (
                <h3 key={key} className="legal-page__subheading">
                  {block.text}
                </h3>
              )
            }

            if (block.kind === 'ul') {
              return (
                <ul key={key} className="legal-page__list">
                  {block.items.map((item) => (
                    <li key={item}>
                      <LegalListItem text={item} />
                    </li>
                  ))}
                </ul>
              )
            }

            return (
              <p key={key} className="legal-page__paragraph">
                <LegalText text={block.text} />
              </p>
            )
          })}
        </section>
      ))}
    </>
  )
}

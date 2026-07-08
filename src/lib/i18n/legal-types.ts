export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }

export type LegalSection = {
  title: string
  blocks: LegalBlock[]
}

export type LegalPageContent = {
  metaTitle: string
  brandLabel: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

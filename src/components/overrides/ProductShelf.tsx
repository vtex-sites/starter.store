import { SectionOverride } from "@faststore/core/src/typings/overrides"

const SECTION = 'ProductShelf' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: { props: { aspectRatio: 0.8 } },
  },
}

export { override }


import { SectionOverride } from "@faststore/core/src/typings/overrides"

const SECTION = 'ProductShelf' as const

const overrides: SectionOverride[typeof SECTION] = {
  name: SECTION,
  components: {
    __experimentalProductCard: { props: { aspectRatio: 0.8 } },
  },
}

export default overrides


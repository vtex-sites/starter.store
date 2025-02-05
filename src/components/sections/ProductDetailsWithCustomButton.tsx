import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'

const ProductDetailsWithCustomButton = getOverriddenSection({
Section: ProductDetailsSection,
components: {
    BuyButton: { props: { size: "small", iconPosition: "right" } } 
},
});

export default ProductDetailsWithCustomButton;
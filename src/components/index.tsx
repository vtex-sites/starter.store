import { ProductDetailsCustom } from "./ProductDetailsCustom"

const components = {
    // Removed CrossSellingShelf from the page to address a bug that's being fixed ATM
    CrossSellingShelf: null,
    // Replacing the default ProductDetails just for the sake of easiness to test. This could be a different component with different CMS configuration
    ProductDetails: ProductDetailsCustom,
}

export default components
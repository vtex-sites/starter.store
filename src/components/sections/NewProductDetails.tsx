import { ProductDetailsSection, getOverriddenSection } from "@faststore/core";
import { AwesomeButton } from "../AwesomeButton";

const NewProductDetails = getOverriddenSection({
    Section: ProductDetailsSection,
    components: {
        BuyButton: {
            Component: () => AwesomeButton(),
        },
    },
});

export default NewProductDetails;
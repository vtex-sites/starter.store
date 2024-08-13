import { SectionOverride } from "@faststore/core";
import { NavBarButton } from "./NavBarButton";

const SECTION: SectionOverride["section"] = "Navbar";


const override: SectionOverride = {
    section: SECTION,
    components: {
        NavbarLinks: {
            Component: () => <NavBarButton />
        },
    },
};

export { override };

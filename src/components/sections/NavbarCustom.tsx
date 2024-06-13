"use client";

import { NavbarSection, getOverriddenSection } from "@faststore/core";

const NavbarCustom = getOverriddenSection({
  Section: NavbarSection,
  components: {
    Navbar: {
      Component: () => (
        <section>
          <p>My Navbar is awesome</p>
        </section>
      ),
    },
  },
});

export default NavbarCustom;

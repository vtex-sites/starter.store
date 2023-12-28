import { getOverriddenSection } from "@faststore/core";

const NavbarCustom = getOverriddenSection({
  section: "Navbar",
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

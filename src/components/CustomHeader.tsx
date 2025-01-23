import { OrganizationJsonLd } from "next-seo";

export function CustomHeader() {
  return (
    <>
      <OrganizationJsonLd
        type="Organization"
        id="https://www.purpule-fox.io/#corporation"
        logo="https://www.example.com/photos/logo.jpg"
        legalName="GO - Companhia FastStore"
        name="FastStore"
        email="sac@faststore.com"
        telephone="4003-2000"
        sameAs={["https://www.facebook.com/faststore"]}
        url="https://www.vtexfaststore.com"
        image="#logo"
      />
      <p>ORG</p>
    </>
  );
}

// starter.store code that will be copied to .faststore (core)

import {
  ServerDynamicContentQuery,
  ServerDynamicContentQueryVariables,
  gql,
} from "@faststore/core/api";
import { execute_unstable as execute } from "@faststore/core/experimental/server";

async function fetchDataMyLandingPage() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();
  return {
    data,
  };
}

async function fetchDataOtherLandingPage() {
  const response = await fetch("other-api/other-landing-page-endpoint");
  const data = await response.json();
  return {
    data,
  };
}

async function fetchDataUsingPromiseAll() {
  try {
    const [apiData1, apiData2] = await Promise.all([
      fetch("my-api/endpoint-1").then((response) => response.json()),
      fetch("my-api/endpoint-2").then((response) => response.json()),
    ]);

    return {
      data: {
        apiData1,
        apiData2,
      },
    };
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
    return {
      data: null,
      errors: ["Error fetching data from APIs"],
    };
  }
}

const query = gql(`
    query ServerDynamicContent($name: String!){
      extraData {
        data {
          title
          rating {
            rate
            count
          }
        }
        customField
        customFieldFromRoot
      }
      namedExtraData(name: $name) {
        data
      }
    }
`);

async function fetchDataUsingApiExtension() {
  try {
    const dynamicContentResult = await execute<
      ServerDynamicContentQueryVariables,
      ServerDynamicContentQuery
    >({
      variables: {
        name: "Variables passed to query - Dynamic Content Feature",
      },
      operation: query,
    });
    return {
      data: dynamicContentResult.data,
    };
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
    return {
      data: null,
      errors: ["Error fetching data from APIs"],
    };
  }
}

// map the slug to correspondent functions
const dynamicContent = {
  home: fetchDataUsingApiExtension,
  "my-landing-page": fetchDataUsingApiExtension,
  // "my-landing-page": fetchDataMyLandingPage,
  "other-landing-page": fetchDataOtherLandingPage,
  "landing-page-using-promise-all": fetchDataUsingPromiseAll,
  "landing-page-using-api-extension": fetchDataUsingApiExtension,
  about: fetchDataUsingApiExtension,
};

export default dynamicContent;

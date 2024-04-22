// starter.store code that will be copied to .faststore (core)

import {
  ServerDynamicContentQuery,
  ServerDynamicContentQueryVariables,
  gql,
} from "@faststore/core/api";
import { execute_unstable as execute } from "@faststore/core/experimental";

async function fetchDataMyLandingPage() {
  const response = await fetch("my-api/my-landing-page-endpoint");
  return await response.json();
}

async function fetchDataOtherLandingPage() {
  const response = await fetch("other-api/other-landing-page-endpoint");
  return await response.json();
}

async function fetchDataUsingPromiseAll() {
  try {
    const [apiData1, apiData2] = await Promise.all([
      fetch("my-api/endpoint-1").then((response) => response.json()),
      fetch("my-api/endpoint-2").then((response) => response.json()),
    ]);

    return {
      apiData1,
      apiData2,
    };
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
    return {
      error: "Error fetching data from APIs",
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
  const dynamicContentResult = await execute<
    ServerDynamicContentQueryVariables,
    ServerDynamicContentQuery
  >({
    variables: { name: "Variables passed to query - Dynamic Content Feature" },
    operation: query,
  });
  return dynamicContentResult;
}

// map the slug to correspondent functions
const fetchFunctions = {
  home: fetchDataUsingApiExtension,
  "my-landing-page": fetchDataMyLandingPage,
  "other-landing-page": fetchDataOtherLandingPage,
  "landing-page-using-promise-all": fetchDataUsingPromiseAll,
  "landing-page-using-api-extension": fetchDataUsingApiExtension,
  about: fetchDataUsingApiExtension,
};

export default fetchFunctions;

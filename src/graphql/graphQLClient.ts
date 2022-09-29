import { GraphQLClient } from 'graphql-request';

import { getSdk } from 'graphql/sdk';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const host = process.env.CONTENTFUL_HOST;
const accessToken =
  host === 'preview.contentful.com' ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN;

const environment = process.env.CONTENTFUL_ENV || 'master';

const contentfulEndpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}`;

const graphQLClient = new GraphQLClient(contentfulEndpoint);

const sdk = getSdk(graphQLClient);

export default sdk;

import type { IComponentSignUpForm } from 'graphql/types';

const handleError = (err: JSON) =>
  new Response(
    JSON.stringify({
      message: err,
    }),
  );

export const alohaCall = async (values: IComponentSignUpForm) => {
  const alohaParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: values }),
  };

  const alohaResponse = await fetch('https://alfred.freshworks.com/v1/nextgen-signup', alohaParams).catch(handleError);
  const alohaData = await alohaResponse.json();
  const alohaUserData = await alohaData.product_signup_response;

  if (!alohaUserData) {
    return false;
  }

  const { redirect_url, account: id } = alohaUserData;

  const freshMarketPostParams: object = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ freshmarketerObject: values, domainURL: redirect_url, accountID: id }),
  };

  const freshMarketEventPostParams: object = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: values.email,
      domainURL: redirect_url,
      accountId: id.id,
    }),
  };

  const freshMarketerPostResponse = await fetch(
    'https://alfred.freshworks.com/v1/freshmarketer-post',
    freshMarketPostParams,
  ).catch(handleError);

  const freshMarketerEventPostResponse = await fetch(
    'https://alfred.freshworks.com/v1/freshmarketer-event-post',
    freshMarketEventPostParams,
  ).catch(handleError);

  const isSucess =
    alohaResponse['status'] === 200 &&
    freshMarketerPostResponse['status'] === 200 &&
    freshMarketerEventPostResponse['status'] === 200;

  return isSucess;
};

export default alohaCall;

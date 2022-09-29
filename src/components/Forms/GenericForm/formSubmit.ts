import type { IFormDropdownField, IFormInputField } from 'graphql/types';

export interface formSubmissionType {
  formValues: IFormDropdownField | IFormInputField;
  dataCenterLocation: string;
}

const handleError = (err: JSON) =>
  new Response(
    JSON.stringify({
      message: err,
    }),
  );

export const freshMarketerCall = async (values: formSubmissionType) => {
  const freshMarketPostParams: object = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ freshmarketerObject: values }),
  };

  const freshMarketEventPostParams: object = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  };

  const freshMarketerPostResponse = await fetch(
    'https://alfred.freshworks.com/v1/freshmarketer-post',
    freshMarketPostParams,
  ).catch(handleError);

  const freshMarketerEventPostResponse = await fetch(
    'https://alfred.freshworks.com/v1/freshmarketer-event-post',
    freshMarketEventPostParams,
  ).catch(handleError);

  const isSucess = freshMarketerPostResponse['status'] === 200 && freshMarketerEventPostResponse['status'] === 200;

  return isSucess;
};

export default freshMarketerCall;

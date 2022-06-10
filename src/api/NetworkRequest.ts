import axios from 'axios';

export type NetworkRequestParams = {
  url: string;
  method: string;
  params: any;
  data: any;
  headers: any;
};

export const networkRequest = async ({
  url,
  method,
  params,
  data,
  headers,
}: NetworkRequestParams) => {
  const config = {
    url,
    method,
    params,
    data,
    headers,
  };
  // console.log('config: ' + JSON.stringify(config, null, 2));
  try {
    return await axios(config);
  } catch (err) {
    console.error(err);
  }
};

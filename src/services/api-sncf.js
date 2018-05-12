const tokenKey = '88ebd821-f0c3-4492-aefa-26d10267f0d1';
const headers = new Headers();
headers.append('Authorization', `${tokenKey}`);

const endPoint = 'https://api.sncf.com/v1/coverage/fr-idf';

const handleResponse = resp => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp.json();
};
export const getPossibleItems = partialValue => {
  return fetch(
    `${endPoint}/places?q=${partialValue}&type[]=stop_area&disable_geojson=true`,
    {
      headers
    }
  ).then(handleResponse);
};

export const getNextDepartures = stop_area_id => {
  const forbiddenUris =
    'forbidden_uris[]=' +
    ['physical_mode:Bus', 'physical_mode:Metro'].join('&forbidden_uris[]=');

  return fetch(
    `${endPoint}/stop_areas/${stop_area_id}/departures?data_freshness=realtime&disable_geojson=true&${forbiddenUris}`,
    { headers }
  ).then(handleResponse);
};

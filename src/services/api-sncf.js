const tokenKey = '88ebd821-f0c3-4492-aefa-26d10267f0d1';
const headers = new Headers();
headers.append('Authorization', `${tokenKey}`);

export const getPossibleItems = partialValue => {
  return fetch(
    `https://api.navitia.io/v1/coverage/fr-idf/places?q=${partialValue}&type[]=stop_area`,
    { headers }
  ).then(resp => resp.json());
};

export const getNextDepartures = stop_area_id => {
  return fetch(
    `https://api.navitia.io/v1/coverage/fr-idf/stop_areas/${stop_area_id}/departures?data_freshness=realtime`,
    { headers }
  ).then(resp => resp.json());
};

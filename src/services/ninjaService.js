const NINJAS_ENDPOINT = 'https://api.tretton37.com/ninjas';
async function fetchNinjas() {
  try {
    const response = await fetch(NINJAS_ENDPOINT, { headers: { 'content-type': 'application/json' } });
    const json = await response.json();
    return json;
  } catch (e) {
    throw new Error(e.message);
  }
}

export default fetchNinjas;

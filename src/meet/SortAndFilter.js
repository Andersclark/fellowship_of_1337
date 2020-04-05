import _ from 'lodash';

function sortByName(ninjas, setNinjas) {
  const sorted = _.sortBy(ninjas, 'name');
  setNinjas(sorted);
}
function sortByOffice(ninjas, setNinjas) {
  const sorted = _.sortBy(ninjas, 'office');
  setNinjas(sorted);
}
function filterBy(rawNinjas, setNinjas, filterString) {
  if (filterString.length > 0) {
    const filtered = rawNinjas.filter((ninja) => ninja.name.toLowerCase()
      .includes(filterString.toLowerCase())
        || ninja.mainText.toLowerCase().includes(filterString.toLowerCase()));
    setNinjas(filtered);
  } else { setNinjas(rawNinjas); }
}
function clearFilters(setNinjas, rawNinjas) {
  setNinjas(rawNinjas);
}

export {
  sortByName, sortByOffice, clearFilters, filterBy,
};

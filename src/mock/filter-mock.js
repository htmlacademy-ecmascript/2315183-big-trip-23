import { filter } from '../utils/filter.js';

function generateFilter(listElements) {
  return Object.entries(filter).map(
    ([filterType, filterListElements]) => ({
      type: filterType,
      count: filterListElements(listElements).length,
    }),
  );
}

export { generateFilter };

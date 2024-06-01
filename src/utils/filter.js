import { FilterType } from '../const.js';
import { isListElementPast, isListElementPresent, isListElementFuture } from './list.js';

const filter = {
  [FilterType.EVERYTHING]: (listElements) => listElements,
  [FilterType.FUTURE]: (listElements) => listElements.filter((listElement) => isListElementFuture(listElement.dueDate)),
  [FilterType.PRESENT]: (listElements) => listElements.filter((listElement) => isListElementPresent(listElement.dueDate)),
  [FilterType.PAST]: (listElements) => listElements.filter((listElement) => isListElementPast(listElement.dueDate)),
};

export { filter };

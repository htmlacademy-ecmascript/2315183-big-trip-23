import dayjs from 'dayjs';

function humanizeDueDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}

function isListElementFuture(dueDate) {
  return dueDate && dayjs().isBefore(dueDate, 'D');
}

function isListElementPresent(dueDate) {
  return dueDate && dayjs(dueDate).isSame(dayjs(), 'D');
}

function isListElementPast(dueDate) {
  return dueDate && dayjs().isAfter(dueDate, 'D');
}

export { humanizeDueDate, isListElementFuture, isListElementPresent, isListElementPast };

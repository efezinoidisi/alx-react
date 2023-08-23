const { fromJS } = require('immutable');

function getImmutableObject(obj) {
  const mapped = fromJS(obj);
  return mapped;
}

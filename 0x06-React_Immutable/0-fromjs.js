import { fromJS } from 'immutable';

export default function getImmutableObject(obj) {
  const mapped = fromJS(obj);
  return mapped;
}

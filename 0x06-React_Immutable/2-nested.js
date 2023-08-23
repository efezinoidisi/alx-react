import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mapped = fromJS(object);
  return mapped.getIn(array, undefined);
}

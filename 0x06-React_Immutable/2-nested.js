import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mapped = Map(object);
  return mapped.getIn(array, undefined);
}

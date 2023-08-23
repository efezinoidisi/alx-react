import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const mapped = Map(page1);
  return mapped.mergeDeep(page2);
}

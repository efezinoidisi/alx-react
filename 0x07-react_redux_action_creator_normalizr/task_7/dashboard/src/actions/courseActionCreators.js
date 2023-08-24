import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    payload: { index },
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    payload: { index },
  };
}

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

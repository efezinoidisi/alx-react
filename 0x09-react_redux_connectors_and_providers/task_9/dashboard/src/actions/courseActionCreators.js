import { SELECT_COURSE, UNSELECT_COURSE,FETCH_COURSE_SUCCESS } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    payload: { index },
  };
}

export const boundSelectCourse = (i) => dispatch(selectCourse(i));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    payload: { index },
  };
}

export const boundUnselectCourse = (i) => dispatch(unSelectCourse(i));

export const setCourses = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('./courses.json')
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((error) => {});
  };
};

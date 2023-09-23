import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
const state2 = [];

const coursereducer = (state = state2 , action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const selectionCourses = action.data.map(course => ({
                ...course,
                isSelected: false,
            }));
            return selectionCourses
        case SELECT_COURSE:
            return state.map((course, index) => {
                index === action.index ? { ...course, isSelected: true } : course
            });
        case UNSELECT_COURSE:
            return state.map((course, index) => {
                index === action.index ? {...course, isSelected: false } : course
            })
        default:
            return state;

    }
};

export default coursereducer;
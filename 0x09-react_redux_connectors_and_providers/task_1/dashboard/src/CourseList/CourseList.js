import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from "aphrodite";



export default function CourseList ({ listCourses }) {
    if (listCourses.length === 0) {
        return <div>No courses available yet</div>
    }
    return (
        <table id="CourseList" className={css(styleList.listrow)} >
            <thead className={css(styleList.headerCell)}>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length > 0 ? (
                    listCourses.map(({ id, name, credit}) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
                ) : (
                    <CourseListRow textFirstCell='No course available yet' />
                )}

            </tbody>
           
        </table>
    );
}

const styleList = StyleSheet.create({
    listrow: {
        border: '1px solid',
        width: '100%',
    },
    headerCell: {
        textAlign: 'center',
        border: '1px solid',

    },


})

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};
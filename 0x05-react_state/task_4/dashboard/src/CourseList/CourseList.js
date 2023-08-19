import React from 'react';
import CourseListRow from './CourseListRow';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';
import { CourseShape } from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' className={css(styles.CourseList)}>
      <thead className={css(styles.head)}>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses?.length === 0 ? (
          <CourseListRow textFirstCell={'No course available yet'} />
        ) : (
          listCourses?.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
CourseList :{
  border: '1px solid grey',
  width: '100%',
  padding: 0,
},
head :{
  textAlign: 'center',
  borderTop: '1px solid grey',
  borderBottom: '1px solid grey',
}
})

export default CourseList;

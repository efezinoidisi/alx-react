import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const style = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };
  const [isChecked, setIschecked] = useState(false);

  return (
    <tr style={style}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(isChecked && styles.rowChecked)}>
            <input
              type='checkbox'
              value={isChecked}
              onChange={() => setIschecked((prev) => !prev)}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  default: {},

  header: {},
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;

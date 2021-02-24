import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
/*
 * TODO: Create the Tag component
 *
 * Requirements:
 * - Must be named Tag
 * - Must be a function component
 * - Should render a <span> element with the text
 * - Should return null if no text is provided
 *
 * Tips:
 * - You can use the 'tag' CSS class for styling
 *
 */
const Tag = (props) => {
  if (props.text) {
    return (
      <>
        <p>
          <span className='tag'>{props.text}</span>
        </p>
      </>
    );
  }
  return null;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;

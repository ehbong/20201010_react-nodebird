import React from 'react';
import PropTypes from 'prop-types';

function PostImages({ images }) {
  return <div>이미지</div>;
}

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;

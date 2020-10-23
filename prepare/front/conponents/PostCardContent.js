import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function PostCardContent({ postData }) {
  return (
    <div>
      {/* 태그 정규식으로 분리  */}
      {postData.split(/(#[^\s#]+)/g).map((v, idx) => {
        if (v.match(/(#[^\s#]+)/g))
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={idx}>
              <a>{v}</a>
            </Link>
          );
        return v;
      })}
    </div>
  );
}

PostCardContent.proptypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;

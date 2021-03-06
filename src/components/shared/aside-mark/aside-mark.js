import React from 'react';

const AsideMark = ({number, tag}) => {
  return (
    <aside className="aside-mark">
      <span className="aside-tag">{tag}</span>
      <span className="aside-number">
        <span>
          {number}
        </span>
      </span>
    </aside>
  );
};

export default AsideMark;
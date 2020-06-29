import React from 'react';

const AsideMark = ({number, tag}) => {
  return (
    <aside className="aside-mark">
      <span className="aside-number">{number}</span>
      <span className="aside-tag">{tag}</span>
    </aside>
  );
};

export default AsideMark;
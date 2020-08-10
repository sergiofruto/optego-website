import React from 'react';
import { RichText } from 'prismic-reactjs'

const PillsLabels = ({slice}) => {
  return (
    <ul className="pills-list">
      {slice.fields.map((pill) => (
        <li className="pill">{RichText.asText(pill.pill_label)}</li>
      ))}
    </ul>
  );
};

export default PillsLabels;
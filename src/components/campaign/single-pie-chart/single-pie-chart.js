import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useCountUp } from 'react-countup';

const SinglePieChart = ({ labelNumber, labelUnit, labelText }) => {
  const number = parseInt(labelNumber, 10);
  const { countUp } = useCountUp({ end: number });

  return (
    <div className="pie-chart">
      <PieChart
        data={[{ value: 100, color: '#F8B617' }]}
        totalValue={100}
        lineWidth={10}
        animate
      />
      <div class="pie-chart__center">
        <span className="pie-chart__number">{countUp}{labelUnit}</span>
        <span className="pie-chart__label">{labelText}</span>
      </div>
    </div>
  );
};

export default SinglePieChart;
import React from 'react';
import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  // Static data for your stats
  const data = initialData; // Assuming initialData is already set with your courses stats

  return (
    <div>
      <h3>Some stats about my courses</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;

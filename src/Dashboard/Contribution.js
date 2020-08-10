
  import React from 'react';
  import Calendar from 'react-github-contribution-calendar';

  const values = {
    '2016-06-23': 1,
  }
  const until = '2016-06-30';

  const panelColors = [
    '#EEEEEE',
    '#15bd70',
  ];

  export default function Contribution() {
  
    return (
        <Calendar values={values} until={until} panelColors={panelColors} />
    );
  }
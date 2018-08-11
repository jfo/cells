import React from 'react';
import ReactDOM from 'react-dom';

const Cell = props => (
  <div
    style={{
      height: '50px',
      width: '50px',
      backgroundColor: 'pink',
      border: '1px solid black',
    }}
  />
);

const Row = props => <Cell />;
const Table = props => <Row />;


ReactDOM.render(<Table />, document.getElementById('root'));

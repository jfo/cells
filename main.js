import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Cell = props => (
  <div
    style={{
      display: 'inline-block',
      height: '20px',
      width: '20px',
      backgroundColor: props.active ? 'pink' : 'blue',
      border: '1px solid black',
    }}
  />
);

const n = 10;

const Row = props =>
  Array(n)
    .fill()
    .map((_, i) => <Cell y={props.key} key={i} />);

const Table = props =>
  Array(n)
    .fill()
    .map((_, i) => (
      <div>
        <Row key={i} />
      </div>
    ));

ReactDOM.render(<Table />, document.getElementById('root'));

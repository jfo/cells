import { React, Fragment } from 'react';
import ReactDOM from 'react-dom';

const makeN = (component, n) => {
  <Fragment>
    <component />
  </Fragment>
}

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

const Row = props => makeN(<Cell />);
const Table = props => makeN(<Row />);


ReactDOM.render(<Table />, document.getElementById('root'));

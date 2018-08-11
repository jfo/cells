import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

const n = 80;

const Cell = props => {
  return (
    <div
      style={{
        display: 'inline-block',
        height: '15px',
        width: '15px',
        backgroundColor: props.active ? 'hotpink' : 'lightblue',
        border: '1px dotted green',
      }}
      onClick={() => props.onCellClick(props.x, props.y)}
    />
  );
};

const CellContainer = connect(
  (state, ownProps) => ({
    active: state.x === ownProps.x && state.y === ownProps.y,
  }),
  dispatch => ({
    onCellClick: (x, y) => {
      dispatch({type: 'ON_CELL_CLICK', data: {x, y}});
    },
  }),
)(Cell);

const Row = props =>
  Array(n)
    .fill()
    .map((_, i) => <CellContainer y={props.y} x={i} key={i} />);

const Table = props =>
  Array(n)
    .fill()
    .map((_, i) => (
      <div key={i}>
        <Row y={i} />
      </div>
    ));

const store = createStore((state = {x: 1, y: 1}, action) => {
  switch (action.type) {
    case 'ON_CELL_CLICK': {
      return action.data;
    }
  }
  return state;
} /* , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */ );

ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById('root'),
);

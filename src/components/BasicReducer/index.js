import React, { useReducer } from 'react';
const initialState = {
  isBordered: true,
};
const reducer = (prevState, { type, payload }) => {
  if (type === 'change border plz') {
    const newState = {
      isBordered: !prevState.isBordered,
    };

    return newState;
  }
};

const BasicReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const divStyles = {
    border: `2px solid ${state.isBordered ? 'black' : 'transparent'}`,
  };

  const handleClick = () => {
    const action = 'change border plz';
    dispatch(action);
  };

  return (
    <div style={divStyles}>
      <p>lorem</p>;<button>Toggle btn visibility</button>
    </div>
  );
};

export default BasicReducer;

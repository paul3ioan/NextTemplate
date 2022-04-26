import { createReducer } from '@reduxjs/toolkit';

import { incrementAction } from '../actions/counter-actions';

type State = {
  number: number;
  ceva: number;
};

const initialState: State = {
  number: 0,
  ceva: 0,
};
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementAction, (state) => ({
    ...state,
    number: state.number + 1,
  }));
  builder.addDefaultCase((state) => ({ ...state }));
});

export default counterReducer;

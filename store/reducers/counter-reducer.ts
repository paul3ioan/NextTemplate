import { createReducer } from '@reduxjs/toolkit';
import { Ceva } from 'store/constants';

import { incrementAction } from '../actions/counter-actions';

const initialState: Ceva = {
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

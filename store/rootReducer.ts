import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter-reducer';

const rootReducer = combineReducers({ counter: counterReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

/*
 * AboutMeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { BIO_REQUESTED, BIO_SUCCEEDED, BIO_FAILED } from './constants';

// The initial state of the App
export const initialState = {
  message: '',
  user: {
    name: '',
    image: '',
    info: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const aboutMeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case BIO_REQUESTED:
        draft.message = BIO_REQUESTED;
        draft.user.info = 'Loading';
        break;
      case BIO_SUCCEEDED:
        draft.message = BIO_REQUESTED;
        draft.user = action.user;
        break;
      case BIO_FAILED:
        draft.user.info = action.message;
        draft.message = BIO_FAILED;
        break;
    }
  });

export default aboutMeReducer;

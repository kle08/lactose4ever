/*
 * AboutMe actions
 */

import { BIO_REQUESTED, BIO_SUCCEEDED, BIO_FAILED } from './constants';

export function bioFailed(message) {
  return {
    type: BIO_FAILED,
    message,
  };
}

export function bioSuccess(user) {
  return {
    type: BIO_SUCCEEDED,
    user,
  };
}

export function bioRequested(username) {
  return {
    type: BIO_REQUESTED,
    username,
  };
}

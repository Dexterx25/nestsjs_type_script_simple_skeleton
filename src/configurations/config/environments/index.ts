/* eslint-disable global-require */
import dev from './dev';
import qa  from './qa';
import prod from './prod';
import test from './test'

const enviroments = {
    dev,
    prod,
    qa,
    test,
  };
  export default enviroments;
  
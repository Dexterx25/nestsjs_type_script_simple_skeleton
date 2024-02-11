/* eslint-disable global-require */
import dev from './dev';
import qa  from './qa';
import prod from './prod';

const enviroments = {
    dev,
    prod,
    qa,
  };
  export default enviroments;
  
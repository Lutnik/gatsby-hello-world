import React from 'react';
import { Link } from 'gatsby';
import Cuda from '../components/Cuda';

export default () => (
  <div>
    <h1>Hello world!</h1>
    <Cuda />
    <Link to="/about"> About page </Link>
  </div>
);

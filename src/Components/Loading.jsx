import React from 'react';
import { Spinner } from 'react-bootstrap';

Loading.propTypes = {};
Loading.defaultProps = {};

function Loading(props) {
  return (
    <div className='text-center pt-5'>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;

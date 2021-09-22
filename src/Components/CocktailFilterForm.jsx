import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';

CocktailFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
CocktailFilterForm.defaultProps = {
  onSubmit: PropTypes.func,
};

function CocktailFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState();
  const typingTimeOutRef = useRef(null);

  function handelSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    // onSubmit(value)

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      const formValues = value;
      onSubmit(formValues);
    }, 500);
  }
  return (
    <div>
      <Container>
        <h1 className='text-center'>Test Cocktails</h1>
        <Form className='d-flex'>
          <FormControl
            type='search'
            placeholder='Search'
            className='mr-2'
            aria-label='Search'
            value={searchTerm}
            onChange={handelSearchTermChange}
          />
        </Form>
      </Container>
    </div>
  );
}

export default CocktailFilterForm;

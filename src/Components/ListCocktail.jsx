import PropTypes from 'prop-types';
import React from 'react';
import { Alert, Card, Container, Row } from 'react-bootstrap';

import './ListCocktail.scss';

ListCocktail.propTypes = {
  cocktails: PropTypes.array,
  loading: PropTypes.bool,
};

ListCocktail.defaultProps = {
  cocktails: [],
  loading: true,
};

function ListCocktail(props) {
  const { cocktails } = props;

  return (
    <div className='listCocktail'>
      <Container>
        <h5 className='text-center'>Cocktail List</h5>
        <Row>
          {cocktails ? (
            cocktails.map((cocktail) => (
              <Card
                style={{ width: '18rem' }}
                key={cocktail.idDrink}
                className='m-3'
              >
                <Card.Img
                  variant='top'
                  src={cocktail.strDrinkThumb}
                  className='pt-2'
                />
                <Card.Body>
                  <Card.Title className='text-info'>
                    Name: {cocktail.strDrink}
                  </Card.Title>
                  <Card.Text>Ingredient</Card.Text>
                  <ul>
                    <li>Glass: {cocktail.strGlass}</li>
                    <li>Instructions: {cocktail.strInstructions}</li>
                    <li>InstructionsDE: {cocktail.strInstructionsDE}</li>
                  </ul>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Alert variant='danger'>
              The name of the cocktail you are looking for does not exist,
              please search for another name
            </Alert>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ListCocktail;

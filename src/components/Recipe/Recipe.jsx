import React from 'react';
import {Col} from 'react-materialize';
import {Card} from 'react-materialize'

const Recipe = (props) => {
    return (
        <Col m={6} s={9}>
            <div>
                <Card className='pink-grey' textClassName='recipe-text' text-align='center' title={props.recipe.title}>
                    Product: {props.recipe.product}
                    <br />
                    Ingredients Used: {props.recipe.recipe}
               </Card>
            </div>
        </Col>
    );
}

export default Recipe;
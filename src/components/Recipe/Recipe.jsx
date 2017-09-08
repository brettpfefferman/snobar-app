import React from 'react';
import {Col} from 'react-materialize'

const Recipe = (props) => {
    return (
        <Col s={4}>
            <div>
                <p>{props.recipe.title}</p>
                <p>{props.recipe.product}</p>
                <p>{props.recipe.recipe}</p>
                <p>{props.recipe.user.name}</p>
            </div>
        </Col>
    );
}

export default Recipe;
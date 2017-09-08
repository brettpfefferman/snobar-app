import React from 'react';

const Recipe = (props) => {
    return (
        <div>
            <p>{props.recipe.title}</p>
            <p>{props.recipe.product}</p>
            <p>{props.recipe.recipe}</p>
            <p>{props.recipe.user.name}</p>
        </div>
    );
}

export default Recipe;
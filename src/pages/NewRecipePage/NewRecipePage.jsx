import React from 'react';
import './NewRecipePage.css';
import MyRecipesForm from '../../components/MyRecipesForm/MyRecipesForm';

const NewRecipePage = (props) => {
    return (
      <div className='MyRecipesForm'>
        <MyRecipesForm
          history={props.history}
        />
      </div>
  );
};


  
export default NewRecipePage;
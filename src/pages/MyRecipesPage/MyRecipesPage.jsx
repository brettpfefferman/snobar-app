import React, {Component} from 'react';
import './MyRecipesPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MyRecipesForm from '../../components/MyRecipesForm/MyRecipesForm';

const MyRecipesPage = (props) => {
    return (
      <div className='MyRecipesForm'>
        <MyRecipesForm
          {...props}
        />
      </div>
    );
  };
  
export default MyRecipesPage;
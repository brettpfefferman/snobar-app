import React from 'react';
// import {Link} from 'react-router-dom';
import './ProductPage.css';
import NavBar from '../../components/NavBar/NavBar';

const ProductPage = (props) => {
    return (
        <div className="ProductPage">
            <NavBar 
            user={props.user}
            handleLogOut={props.handleLogout}
            />
        </div>
    );
}

export default ProductPage;
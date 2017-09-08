import React from 'react';
// import {Link} from 'react-router-dom';
import './ProductPage.css';
import NavBar from '../../components/NavBar/NavBar';
// import fullslider from '../../startbootstrap-full-slider';
import {Carousel} from 'react-materialize';

const ProductPage = (props) => {
    return (
        <div className="ProductPage">
            <Carousel options={{ fullWidth: true }} images={[ 
            'http://www.thenewpotato.com/wp-content/uploads/2014/08/ICE_CREAM.gif?a4c780',
        'http://images.lpcdn.ca/924x615/201706/07/1416183-nouvelle-glacerie-vegane-hoche-glace.jpg',
        'http://www.kayture.com/wp-content/uploads/2014/04/rome.ice_.cream_.jpg',
        'http://images.dailyhive.com/20160704131258/icecream.jpg'
            ]} />
        </div>
    );
}

export default ProductPage;
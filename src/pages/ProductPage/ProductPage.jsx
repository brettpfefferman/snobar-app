import React from 'react';
// import {Link} from 'react-router-dom';
import './ProductPage.css';
import NavBar from '../../components/NavBar/NavBar';
// import fullslider from '../../startbootstrap-full-slider';
import Carousel from 'nuka-carousel';

const ProductPage = (props) => {
    return (
        <div className="ProductPage">
            <Carousel speed={1000} autoplay={true} wrapAround={true} >
            <img src="http://www.thenewpotato.com/wp-content/uploads/2014/08/ICE_CREAM.gif?a4c780"/>
        <img src="http://images.lpcdn.ca/924x615/201706/07/1416183-nouvelle-glacerie-vegane-hoche-glace.jpg"/>
        <img src="http://www.kayture.com/wp-content/uploads/2014/04/rome.ice_.cream_.jpg"/>
        <img src="http://images.dailyhive.com/20160704131258/icecream.jpg"/>
            </Carousel>
        </div>
    );
}

export default ProductPage;
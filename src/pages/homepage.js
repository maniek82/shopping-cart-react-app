import React from 'react';

import ProductListing from '../features/product-listings';
import data from '../data/products.json';


const HomePage = (props) => {
    return (
        <div className="homepage">
            <h2>HomePage</h2>
            <ProductListing />
        </div>
    );
};

export default HomePage;


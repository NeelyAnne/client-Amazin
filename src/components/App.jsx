import React, { Component } from 'react';
import Product from './productVariant/Product.jsx'
import CustomerReviewsContainer from './CustomerReviewsContainer';
import CWBA from './CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';
import Appples from "./RatingSummary/Appples";
import CImagesAll from './CustomerImagesAll';

class App extends Component {
    render(){
        return(
            <div>
                <h1>My React App</h1>
                <Product />
                <CWBA/>
                <CustomerReviewsContainer />
                <QAcomponent />
                <Appples />
                <CImagesAll />
            </div>
        )
    }
}

export default App;

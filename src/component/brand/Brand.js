import React from 'react';
import Product from './product/Product';
import './Brand.css';

class Brand extends React.Component {
    render() {
        return <div className = 'brand col-md-12'>
            <h1>{this.props.type}</h1>
            <div className = 'd-flex'> 
                {this.props.products.filter(product => product.category === this.props.type)
                                    .map(product => <Product 
                                            name = {product.name} 
                                            price = {product.price} 
                                            addProduct = {this.props.addProduct} 
                                            key = {product.name}>
                                        </Product>)}
            </div>
        </div>
    }
}

export default Brand;
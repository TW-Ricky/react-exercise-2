import React from 'react';
import defaultImg from '../../../assets/product_image_placeholder.png';
import './Product.css';

class Product extends React.Component {

    render() {
        return <div className = 'product'>
            <h3>{this.props.name}</h3>
            <img src = {defaultImg}></img>
            <div className = 'd-flex'>
                <div className = 'price'>
                    <h3>{this.props.price}</h3>
                </div>
                <div className = 'add'>
                    <button className = 'btn btn-primary btn-sm'onClick = {() => this.props.addProduct()}>
                        add to card
                    </button>
                </div>
                
            </div>
        </div>
    }
}

export default Product;
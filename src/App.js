import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Brand from './component/brand/Brand';

class App extends Component {
  state = {
    count: 0,
    products: [],
    brands: ['iPhone', 'HUAWEI']
  };
  addProduct = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <main className = "app">
        <Header count = {this.state.count}/>
        {this.state.brands.map(brand => 
          <Brand products = {this.state.products} 
            type = {brand} 
            addProduct = {this.addProduct}
            key = {brand}>
          </Brand>
        )}
      </main>
    );
  }

  url = "http://localhost:3000/products";
  async componentDidMount() {
    const response = await fetch(this.url);
    const result = await response.json();
    this.setState({
      products: result
    })
  }
}

export default App;

import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './LastProduct.css';

class LastProduct extends Component {


    constructor() {
        super()
        this.state = {
         lastProduct: [],
        
        }
       
    }
    componentDidMount() {
        let productArray = []
  
        fetch('http://localhost:3001/products/api/products')
            .then(result => {
                return result.json()
            })
            .then(products => {
              productArray = products.products
              this.setState({
                lastProduct:productArray[productArray.length-1]
              })
               console.log(productArray[productArray.length - 1])
          
            })
            .catch(error => {
                console.log(error)
            })
           
    }


    render() {

      

        return (
            <React.Fragment>
                <div className="title">
                    <h1>Último producto en la base de datos</h1>
                </div>
                <div className="row">
                {
                 <ProductCard img={this.state.lastProduct.image} name={this.state.lastProduct.name} description={this.state.lastProduct.description} detail={this.state.lastProduct.detail}/>
                }

                </div>
            </React.Fragment>
        )

    }
}
export default LastProduct;
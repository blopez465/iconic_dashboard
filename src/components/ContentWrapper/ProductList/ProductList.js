import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css';

class ProductList extends Component {


    constructor() {
        super()
        this.state = {
            productList: [],
        
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
                productList: productArray
              })
               console.log(productArray)
          
            })
            .catch(error => {
                console.log(error)
            })
           
    }


    render() {

      

        return (
            <React.Fragment>
                <div className="title-productlist">
                    <h1>Todos los productos en la base de datos</h1>
                </div>
                <div className="productlist-row">
        
                    {
                    this.state.productList.map((product,index)=>{
                     return    <ProductCard  img={product.image} name={product.name} description={product.description} detail={product.detail} key={index}/>
                    })
                }

                </div>
            </React.Fragment>
        )

    }
}
export default ProductList;
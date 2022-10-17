import React, { Component } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import './Categories.css';

class Categories extends Component {
    properties = []

    constructor() {
        super()
        this.state = {
            categoriesList: []
        }
       
    }
    componentDidMount() {
        let categoriesArray = []
  
        fetch('http://localhost:3001/products/api/products')
            .then(result => {
                return result.json()
            })
            .then(categories => {
                categoriesArray= Object.entries(categories.countByCategory)
                this.setState({
                   categoriesList:categoriesArray
                })
               
               
             
                // console.log(categories.countByCategory)
                
                // console.log(countList)

            })
            .catch(error => {
                console.log(error)
            })
           
    }


    render() {

        //let keys = Object.keys(this.state.categoriesList);

        return (
            <React.Fragment>
                <div className="title">
                    <h1>Categorías en la base de datos</h1>
                </div>
                <div className="row">
                {
                    this.state.categoriesList.map((category, index) => {
                        return  <CategoriesCard name={category[0]} count={category[1]} key={index} />
                    })
                        
                }
            

                </div>
            </React.Fragment>
        )

    }
}
export default Categories;
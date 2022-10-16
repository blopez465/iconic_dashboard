import React, { Component } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import './Categories.css';

class Categories extends Component {
    properties = []

    constructor() {
        super()
        this.state = {
            categoriesList: [],
            //         totalCategoria: {
            //     'accesories': 46,
            //     'accesory': 2,
            //     'casual-clothing': 51,
            //     'clothing': 3
            // }
        }
       
    }
    componentDidMount() {
      //  let categoriesList = []
        fetch('http://localhost:3001/products/api/products')
            .then(result => {
                return result.json()
            })
            .then(categories => {
                this.setState({
                    categoriesList: categories.countByCategory
                })
                //  this.setState({categoriesList : [...categories.countByCategory]})
                //categoriesList.push(categories)
                // console.log(typeof(categories.countByCategory))
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
                {/* {
                    this.state.categoriesList.map((category, index) => {
                        return  <CategoriesCard name={'test'} count={1} />
                    })
                        
                } */}
             {/* {
               this.keys.forEach(element => {
                return <CategoriesCard name={element} count={this.state.categoriesList[element]} /> 
               })
             } */}
           
                    {/* //     return <CategoriesCard title={item.title} count={item.count} key={i} /> */}
      
               
                    {/* { 
                        this.properties = Object.values(this.state.totalCategoria)
                    }
                    {console.log(this.properties)} */}

                </div>
            </React.Fragment>
        )

    }
}
export default Categories;
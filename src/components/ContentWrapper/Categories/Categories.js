import React, {Component} from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import './Categories.css';

class Categories extends Component {
    constructor() {
        super()
        this.state = {
            categoriesList: []
        }
    }
    componentDidMount(){
        let categoriesList= []
        fetch('http://localhost:3001/products/api/products')
        .then(result =>{
            return result.json()
        })
        .then(categories=>{
            //  this.setState({categoriesList : [...categories.countByCategory]})
            categoriesList.push(categories)
            console.log(categories.countByCategory)

        })
        .catch(error=>{
            console.log(error)
        })
    }

 
    render(){
        return(
            <React.Fragment>
            <div className="title">
                <h1>Categorías en la base de datos</h1>
            </div>
            <div className="row">
             {   
             this.state.categoriesList.map((category,index)=>{
                return <CategoriesCard {...category} key = {index}/>
             })
           
             }
            </div>
       </React.Fragment>
        )
       
    }
}
export default Categories;
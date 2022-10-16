//import { info } from 'logrocket';
import { Component } from 'react';
//import Categories from '../Categories/Categories';
import Content from './Content';


// let info = [];


class DBInfo extends Component {
    constructor() {
        super();
        this.state = {
            userTotal: 0,
            productTotal: 0,
            categoryTotal: 0
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/users/api/users')
            .then(result => {
                return result.json()
            })
            .then(user => {
                //  console.log(user.total)
                this.setState({
                    userTotal: user.total
                })
            })
            .catch(error => {
                console.log(error)
            })
        fetch('http://localhost:3001/products/api/products')
            .then(result => {
                return result.json()
            })
            .then(product => {
                //  console.log(user.total)
                this.setState({
                    productTotal: product.total,
                    categoryTotal: Object.keys(product.countByCategory).length
                })
                console.log("test"+ typeof(product))
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {

        let infoList = [
            {
                title: "Total de Productos",
                count: this.state.productTotal,
                icon: "flag"
            },
            {
                title: "Total de Usuarios",
                count: this.state.userTotal,
                icon: "users"
            },
            {
                title: "Total de Categorías",
                count: this.state.categoryTotal,
                icon: "heart"
            }
        ]
        return (
            <div className='content-row'>
                {
                    infoList.map((item, i) => {
                        return <Content title={item.title} count={item.count} icon={item.icon} key={i} />
                    })
                }
            </div>

        );
    }
}

export default DBInfo;
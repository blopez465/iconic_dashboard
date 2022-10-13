
import './Content.css';
import { useState, useEffect } from 'react'





function Content(props) {

  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users/api/users')
      .then(response => response.json())
      .then(data => {
        setUsuarios(data)
      })
      .catch(error => console.log(error))

  }, [])
  //console.log(usuario.total)

  useEffect(() => {
    fetch('http://localhost:3001/products/api/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data)
      })
      .catch(error => console.log(error))

  }, [])

  let totales = [
    {
      count: usuarios.total
    },
    {
      count:  productos.total
    },
    {
      count: 4,
    }
  ]



  return (

    <div className='content'>

      <div className="card-content">

        <div className="card-body">

          <div className="info-col">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>

           
              {/* {
                totales.map((total, i) => {
                  return(
                    <div className="h5 mb-0 font-weight-bold text-gray-800"> {total.count}</div>
                  )
                })
              } */}
              {usuarios.total}
            
          </div>
          <div className="icon-col">
            <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Content;
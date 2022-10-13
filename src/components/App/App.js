
import './App.css';
import TopBar from '../ContentWrapper/TopBar/TopBar'
import Content from '../ContentWrapper/Content/Content'
import LastProduct from '../ContentWrapper/LastProduct/LastProduct';
import Categories from '../ContentWrapper/Categories/Categories';


function App() {

  let info = [
    {
      title: "Total de Productos",
      count: 105,
      icon: "flag"
    },
    {
      title: "Total de Usuarios",
      count: 4,
      icon: "users"
    },
    {
      title: "Total de Categorías",
      count: 4,
      icon: "heart"
    }
  ]

  return (

    <div className='content-father'>
      <div className='top-bar'>
        <TopBar />
      </div>
      <div className='content-row'>
        {/* <Content/>
          <Content/>
          <Content/> */}
        
        

          {
            info.map((item,i)=>{
             return  <Content title={item.title} count={item.count} icon={item.icon} key={i}/>
            })
          }

        {/* <Content /> */}

      </div>
      <div className='last-product'>
        <LastProduct />
      </div>
      <div className='categories-count'>
        <Categories />
      </div>

    </div>
  );
}

export default App;
